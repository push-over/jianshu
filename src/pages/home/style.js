import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    overflow: hidden;
    margin: 0 auto;
`;

export const HomeLeft = styled.div`
    float: left;
    width: 625px;
    margin-top: 30px;
    margin-left: 15px;
`;

export const HomeRight = styled.div`
    float: right;
    width: 240px;
    margin-top: 30px;
`;

export const TopicWrapper = styled.div`
    overflow: hidden;
    padding: 20px 0 10px 0;
    margin-left: -18px;
`;

export const TopicItem = styled.div`
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

// export const BannerWrapper = styled.div`
//     position: relative;
//     overflow: hidden;
//     width: 625px;
//     height: 270px;
//     background: pink;
//     border-radius: 5px;
// `;

// export const BannerArrows = styled.div`
//     position: absolute;
//     width: 625px;
//     height: 50px;
//     top: 110px;
// `;

// export const BannerControl = styled.span`
//     width: 40px;
//     height: 50px;
//     background: green;
//     line-height: 50px;
//     text-align: center;
//     color: #fff;
//     background-color: rgba(0,0,0,.4);
//     cursor: pointer;    
//     &.left {
//         float: left;
//         border-top-right-radius: 6px;
//         border-bottom-right-radius: 6px;
//     }
//     &.right {
//         float: right;
//         border-top-left-radius: 6px;
//         border-bottom-left-radius: 6px;
//     }
// `;

// export const BannerImage = styled.ul`
//     width: 6000px;
//     height: 100%;
//     transtion: all 2s;
// `; 

// export const BannerImageItem = styled.li`
//     width: 625px;
//     float: left;  
//     img {
//         width: 100%;
//     }
// `;

// export const BannerIndicators = styled.ol`
//     width: 80%;
//     height: 20px;
//     left: 40%;
//     bottom: 8px;
//     position: absolute; 
//     margin-left: -30%;
//     padding-left: 0;
//     text-align: center;
// `;

// export const BannerIndicatorsItem = styled.li`
//     width: 25px;
//     height: 2px;
//     background-color: hsla(0,0%,47%,.4);
//     border-radius: 10px;
//     display: inline-block;
//     margin: 3px;
//     cursor: pointer;
//     &.active {
//         background-color: red;
//     }
// `;