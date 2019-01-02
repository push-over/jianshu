import styled from 'styled-components';

export const DetailWrapper = styled.div `
    width: 620px;
    margin: 0 auto;
    margin-top: 65px;
    padding-top: 20px;
    padding-bottom: 40px;
    box-sizing: border-box;
    overflow: hidden;
`;

export const DetailTitle = styled.div `
    margin: 20px 0 0;
    font-size: 34px;
    font-weight: 700;
    line-height: 1.3;
    color: #333;
`;

export const DetailAuthor = styled.div `
    margin: 30px 0 40px;
    .avatar {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        vertical-align: middle;
        cursor: pointer;
        border: 1px solid #ddd;
    }
`;

export const DetailAuthorInfo = styled.div `
    margin-left: 15px;
    vertical-align: middle;
    display: inline-block;
    .name {
        cursor: pointer;
        color: #333;
        font-size: 16px;
        margin-right: 5px;
    }
    .follow {
        display: inline-block;
        padding: 0 7px 0 5px;
        font-size: 12px;    
        font-weight: 400;
        text-align: center;
        border-radius: 40px;
        color: #fff;
        background-color: #42c02e;
        cursor: pointer;

        i {
            font-size: 12px;
            margin-right: 3px;
        }
    }
`;

export const DetailAuthorMeta = styled.div `
    margin-top: 5px;
    font-size: 12px;
    color: #969696;
`;

export const DetailContent = styled.div `
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
`;