import styled from 'styled-components';

export const HomeWrapper = styled.div `
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
    margin-top: 56px;
`;

export const HomeLeft = styled.div `
    float: left;
    width: 625px;
    margin-top: 30px;
    margin-left: 15px;
`;

export const HomeRight = styled.div `
    float: right;
    width: 280px;
    margin-top: 30px;
`;

export const Line = styled.div `
    overflow: hidden;
    border-bottom: 1px solid #dcdcdc;
`;

export const BannerWrapper = styled.div `
    position: relative;
    overflow: hidden;
    width: 625px;
    height: 270px;
    border-radius: 5px;
    margin-bottom: 30px;
    .ant-carousel .slick-slide {
        text-align: center;
        height: 100%;
        overflow: hidden;
    }
`;

export const ListItem = styled.div `
    overflow: hidden;
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 150px;
        height: 100px;
        float: right;
        cursor: pointer;
    }
    &.list:first-of-type(1) {
        border-top: 1px solid #dcdcdc;
    }
`;

export const ListInfo = styled.div `
    width: 460px;
    float: left;
    .title {
        font-size: 18px;
        font-weight: bold;
        line-height: 27px;
        color: #333;
        cursor: pointer;
    }
    .desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
    .meta {
        margin-top: 10px;
        font-size: 12px;
        font-weight: 400;
        line-height: 20px;
    }
    .meta-info {
        margin-right: 10px;
        color: #b4b4b4;
        cursor: pointer;
        .iconfont {
            font-size: 13px;
            margin-right: 3px;
            vertical-align: middle;
        }
    }
    .comments:hover {
        color: #787878;
    }
`;

export const RecommendWrapper = styled.div `
    width: 100%;
    margin-top: -4px;
`;

export const RecommendItem = styled.div `
    width: 100%;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
    border-radius: 4px;
    cursor: pointer;
`;

export const LoadMore = styled.div `
    width: 100%;
    height: 40px;
    background: #a5a5a5;
    border-radius: 20px;
    margin: 30px auto 60px;
    text-align: center;
    padding: 10px 15px;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    &.load-more:hover {
        background-color: #9b9b9b;
    }  
`;

export const BackTopWrapper = styled.div `
    position: fixed;
    right: 40px;
    bottom: 40px;
    width: 50px;
    height: 50px;
    background-color: #fff;
    line-height: 50px;
    text-align: center;
    cursor: pointer;
    border: 1px solid #dcdcdc;
`;

export const DownloadAppWrapper = styled.div `
    position: relative;
    margin-top: 9px;
    margin-bottom: 30px;
    padding: 10px 22px;
    width: 100%;
    border: 1px solid #f0f0f0;
    border-radius: 6px;
    background: #fff;
    box-sizing: border-box;
    cursor: pointer;
    img {
        width: 60px;
        height: 60px;
        opacity: 0.85;
        vertical-align: middle;
    }
`;

export const DownloadAppInfo = styled.div `
    display: inline-block;
    vertical-align: middle;
    margin-left: 7px;
    p {
        margin-bottom: 0;
    }
    .title {
        font-size: 15px;
        color: #333;
    }
`;

export const DownloadAppCode = styled.div `
    width: 180px;
    height: 180px;
    border: 1px solid #dcdcdc;
    background: #fff;
    position: absolute;
    padding: 10px;
    bottom: 91px;
    left: 50px;
    border-radius: 4px;
    &.download-app:before {
        content: "";
        left: 80px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        bottom: -10px;
        z-index: 10;
        position: absolute;
        background-color: #fff;
        border-bottom: 1px solid #dcdcdc;
        border-right: 1px solid #dcdcdc;
    }
    img {
        width: 100%;
        height: 100%;
    }
`;