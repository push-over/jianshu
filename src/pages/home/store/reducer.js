import * as constants from './constants';
import {
    fromJS
} from 'immutable';

const defaultState = fromJS({
    list: [
        {
            "id": 1,
            "imgUrl": "//upload.jianshu.io/admin_banners/web_images/4593/fa5490809ff3344c5aa72312aa1e05921be77222.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        },
        {
            "id": 2,
            "imgUrl": "//upload.jianshu.io/admin_banners/web_images/4590/7f1edd154f90446a038d6ecd10bebf6e8929fbf5.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        },
        {
            "id": 3,
            "imgUrl": "//upload.jianshu.io/admin_banners/web_images/4591/30f6c3d080ff9d9610d745bd777b1c0ebba3e183.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540",
        }
    ],

    articleList: [
        {
            "id": 1,
            "title": "这样喝茶，等于慢性割肾",
            "imgUrl": "//upload-images.jianshu.io/upload_images/9602437-0755ec6f3e05eee9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            "desc": "南瓜是我们日常生活中最常见的一种蔬果。因其价格低廉、营养丰富、做法简单深受大众喜爱。 首先它富含碳水化合物、蛋白质、脂肪、多种维生素以及矿物质和..."
        },
        {
            "id": 2,
            "title": "这样喝茶，等于慢性割肾",
            "imgUrl": "//upload-images.jianshu.io/upload_images/9602437-0755ec6f3e05eee9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            "desc": "南瓜是我们日常生活中最常见的一种蔬果。因其价格低廉、营养丰富、做法简单深受大众喜爱。 首先它富含碳水化合物、蛋白质、脂肪、多种维生素以及矿物质和..."
        },
        {
            "id": 3,
            "title": "这样喝茶，等于慢性割肾",
            "imgUrl": "//upload-images.jianshu.io/upload_images/9602437-0755ec6f3e05eee9.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240",
            "desc": "南瓜是我们日常生活中最常见的一种蔬果。因其价格低廉、营养丰富、做法简单深受大众喜爱。 首先它富含碳水化合物、蛋白质、脂肪、多种维生素以及矿物质和..."
        }
    ]
});

export default (state = defaultState, action) => {
    return state;
}