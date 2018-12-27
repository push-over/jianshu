import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
    focused: false
});

// 纯函数 给定固定的输入就一定会有固定的输出，同时不要去有副作用
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        // immutable对象的set方法，会结合之前immutable对象的值和设置的值，返回一个全新的对象
        return state.set('focused', true);
    }
    if (action.type === constants.SEARCH_BLUR) {
        return state.set('focused', false);
    }
    return state;
}