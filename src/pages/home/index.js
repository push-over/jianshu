import React, { PureComponent, Fragment } from 'react';
import Header from '../../common/header/index';
import Banner from './components/Banner';
import List from './components/List';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import Author from './components/Author';
import Footer from '../../common/footer';
import { connect } from 'react-redux';
import { actionCreators } from './store';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Header />
                <HomeWrapper>
                    <HomeLeft>
                        <Banner />
                        <List />
                    </HomeLeft>
                    <HomeRight>
                        <Recommend />
                        <DownloadApp />
                        <Author />
                    </HomeRight>
                <Footer />
                </HomeWrapper>
            </Fragment>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
    }
}

const mapDispatchProps = (dispatch) => {
    return {
        changeHomeData() {
            dispatch(actionCreators.getHomeInfo());
        }
    }
}

export default connect(null, mapDispatchProps)(Home);