import * as constants from './constants';
import axios from 'axios';
import { fromJS } from 'immutable';

const changeDetailData = (result) => ({
    type: constants.CHANGE_DETAIL_DATA,
    detailData: fromJS(result)
});

export const getDetailInfo = (detailId) => {
    return (dispatch) => {
        axios.get('/api/detail.json?id=' + detailId).then((res) => {
            const result = res.data.data;
            dispatch(changeDetailData(result));
        });
    }
};