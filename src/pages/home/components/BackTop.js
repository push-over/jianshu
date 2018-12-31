import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import {
    BackTopWrapper
} from '../style';

class BackTop extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    render() {

        const { showScroll } = this.props;

        return (
            <Fragment>
                {
                    showScroll ?
                        <BackTopWrapper
                            onClick={this.handleScrollTop}>
                            <i style={{ "color": "#333" }} className="iconfont">&#xe671;</i>
                        </BackTopWrapper> :
                        null
                }
            </Fragment>
        )
    }

    componentDidMount() {
        this.bindEvents()
    }

    // componentWillUpdate() {
    //     window.removeEventListener('scroll', this.props.changeScrollTopShow);
    // }

    bindEvents() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = (state) => {
    return {
        showScroll: state.getIn(['home', 'showScroll'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeScrollTopShow() {
            if (document.documentElement.scrollTop > 200) {
                dispatch(actionCreators.toggleTopShow(true));

            } else {
                dispatch(actionCreators.toggleTopShow(false));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BackTop);