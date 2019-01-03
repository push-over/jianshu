import * as constants from './constants';
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    bannerList: [],
    articleList: [],
    recommendList: [],
    authorList: [],
    articlePage: 1,
    showcarousel: false,
    showScroll: false,
    showDownloadApp: false,
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_HOME_DATA:
            return state.merge({
                'bannerList': fromJS(action.bannerList),
                'articleList': fromJS(action.articleList),
                'recommendList': fromJS(action.recommendList),
                'authorList': fromJS(action.authorList)
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
        case constants.BANNER_MOUSE_ENTER:
            return state.set('showcarousel', true);
        case constants.BANNER_MOUSE_LEAVE:
            return state.set('showcarousel', false);
        default:
            return state;
    }
}