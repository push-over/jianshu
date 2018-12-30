import * as constants from './constants';
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    bannerList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'bannerList': fromJS(action.bannerList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList)
            });
        case constants.ADD_HOME_LIST: 
            return state.merge({
                'articleList': state.get('articleList').concat(action.articleList),
                'articlePage': action.nextPage
            })
        default:
            return state;
    }
}