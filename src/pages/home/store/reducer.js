import * as constants from './constants';
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    bannerList: [],
    articleList: [],
    recommendList: [],
    articlePage: 1,
    showScroll: false,
    showDownloadApp: false,
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
            });
        case constants.TOGGLE_TOP_SHOW:
            return state.set('showScroll', action.show);
        case constants.MOUSE_ENTER:
            return state.set('showDownloadApp', true);
        case constants.MOUSE_LEAVE:
            return state.set('showDownloadApp', false);
        default:
            return state;
    }
}