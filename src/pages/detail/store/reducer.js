import * as constants from './constants';
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    detailData: []
});

export default (state = defaultState, action) => {
    switch (action.type) {
        case constants.CHANGE_DETAIL_DATA:
            return state.set('detailData', fromJS(action.detailData));
        default:
            return state;
    }
}