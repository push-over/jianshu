import React, { Component } from 'react';
import Banner from './components/Banner';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { constants } from './store';
import axios from 'axios';

import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './style';

class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <Banner />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
            </HomeWrapper>
        )
    }

    componentDidMount() {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            const action = {
                type: constants.CHANGE_HOME_DATA,
                bannerList: result.bannerList,
                articleList: result.articleList,
                recommendList: result.recommendList
            }

            this.props.changeHomeData(action);
        })
      }
}

const mapDispatchProps = (dispatch) => {
    return {
        changeHomeData(action) {
            dispatch(action);
        }
    }
} 

export default connect(null,mapDispatchProps)(Home);