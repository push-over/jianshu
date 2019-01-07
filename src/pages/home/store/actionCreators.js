import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeHomeData = (result) => ({
    type: constants.CHANGE_HOME_DATA,
    bannerList: result.bannerList,
    articleList: result.articleList,
    recommendList: result.recommendList,
});

const changeAuthorData = (result) => ({
    type: constants.CHANGE_AUTHOR_DATA,
    authorList: fromJS(result)
});

const addHomeList = (result, nextPage) => ({
    type: constants.ADD_HOME_LIST,
    articleList: fromJS(result),
    nextPage
});

export const toggleTopShow = (show) => ({
    type: constants.TOGGLE_TOP_SHOW,
    show
});

export const mouseEnter = () => ({
    type: constants.MOUSE_ENTER
});

export const mouseLeave = () => ({
    type: constants.MOUSE_LEAVE
});

export const bannerMouseEnter = () => ({
    type: constants.BANNER_MOUSE_ENTER
});

export const bannerMouseLeave = () => ({
    type: constants.BANNER_MOUSE_LEAVE
});

export const getHomeInfo = () => {
    return (dispatch) => {
        axios.get('/api/home.json').then((res) => {
            const result = res.data.data;
            dispatch(changeHomeData(result));
        })
    }
};

export const getMoreList = (page) => {
    return (dispatch) => {
        axios.get('/api/homeList.json?page=' + page).then((res) => {
            const result = res.data.data;
            dispatch(addHomeList(result, page + 1));
        })
    }
};

export const getAuthorInfo = () => {
    return (dispatch) => {
        axios.get('/api/author.json').then((res) => {
            const result = res.data.data;
            dispatch(changeAuthorData(result));
        })
    }
}