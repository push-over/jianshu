import styled from 'styled-components';

export const HomeWrapper = styled.div `
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
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

export const TopicWrapper = styled.div `
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div `
    float: left;
    height: 32px;
    line-height: 32px;
    padding-right: 10px;
    background: #f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    margin-left: 18px;
    margin-bottom: 18px;
    .topic-pic {
        display: block;
        float: left;    
        width: 32px;
        height: 32px;
        margin-right: 10px;
    }
`;

export const BannerWrapper = styled.div `
    position: relative;
    overflow: hidden;
    width: 625px;
    height: 270px;
    border-radius: 5px;
    background: pink;
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
    border-top: 1px solid #dcdcdc;
    .pic {
        display: block;
        width: 150px;
        height: 100px;
        float: right;
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
    }
`;

export const RecommendWrapper = styled.div`
    width: 100%;
    margin-top: -4px;
`;

export const RecommendItem = styled.div`
    width: 100%;
    height: 50px;
    background: url(${(props) => props.imgUrl});
    background-size: contain;
    margin-bottom: 6px;
    border-radius: 4px;
    cursor: pointer;
`;