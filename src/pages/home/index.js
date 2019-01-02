import React, { PureComponent } from 'react';
import Banner from './components/Banner';
import List from './components/List';
import Recommend from './components/Recommend';
import DownloadApp from './components/DownloadApp';
import BackTop from './components/BackTop';
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
            <HomeWrapper>
                <HomeLeft>
                    <Banner />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <DownloadApp />
                </HomeRight>
                <BackTop />
            </HomeWrapper>
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