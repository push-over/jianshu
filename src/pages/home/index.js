import React, { PureComponent } from 'react';
import Banner from './components/Banner';
import List from './components/List';
import Topic from './components/Topic';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
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
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
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