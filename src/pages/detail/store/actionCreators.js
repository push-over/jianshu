import * as constants from './constants';
import axios from 'axios';

const changeDetailData = (result) => ({
    type: constants.CHANGE_DETAIL_DATA,
    detailData: result
});

export const getDetailInfo = () => {
    return (dispatch) => {
        axios.get('/api/detail.json').then((res) => {
            const result = res.data.data;
            dispatch(changeDetailData(result));
        })
    }
};