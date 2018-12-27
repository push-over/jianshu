import * as constants from './constants';

const defaultState = {
    focused: false
};

// 纯函数 给定固定的输入就一定会有固定的输出，同时不要去有副作用
export default (state = defaultState, action) => {
    if (action.type === constants.SEARCH_FOCUS) {
        return {
            focused: true
        }
    }
    if (action.type === constants.SEARCH_BLUR) {
        return {
            focused: false
        }
    }
    return state;
}