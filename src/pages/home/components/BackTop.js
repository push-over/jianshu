import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import BackTops from 'antd/lib/back-top';
import Tooltip from 'antd/lib/tooltip';
import 'antd/lib/back-top/style/index.css';
import 'antd/lib/tooltip/style/index.css';
import {
    BackTopWrapper,
    BackTopBox
} from '../style';

class BackTop extends PureComponent {

    // handleScrollTop() {
    //     window.scrollTo(0, 0);
    // }

    render() {

        const { showScroll } = this.props;
        const text = <span>回到顶部</span>;
        return (
            <Fragment>
                {
                    showScroll ?
                        <BackTops>
                            <BackTopBox>
                            <Tooltip placement="left" title={text}>
                                <BackTopWrapper>
                                    <i style={{ "color": "#333" }} className="iconfont">&#xe671;</i>
                                </BackTopWrapper>
                            </Tooltip>
                            </BackTopBox>
                        </BackTops> :
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