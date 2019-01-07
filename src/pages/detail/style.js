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
        padding: 4px 7px 3px 5px;
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
    margin: 0 0 25px;
`;

export const SupportAuthor = styled.div `
    padding: 20px 0;
    text-align: center;
    clear: both;
    box-sizing: border-box;
    p {
        padding: 0 30px;
        margin-bottom: 20px;
        font-size: 17px;
        font-weight: 700;
        color: #969696;
    }
`;

export const SupportPay = styled.div `
    display: inline-block;
    margin-bottom: 20px;
    padding: 11px 25px;
    font-size: 16px;
    color: #fff;
    background: #ea6f5a;
    border-radius: 20px;
    box-sizing: border-box;
    cursor: pointer;
    border: 1px solid transparent;
`;

export const Supporter = styled.div `
    height: 50px;
`;

export const DetailFoot = styled.div `
    margin-bottom: 30px;
    font-size: 12px;
    color: #c8c8c8;
    cursor: pointer;
    .iconfont {
        margin-right: 2px;
        font-size: 15px;
    }
    .copyright {
        display: inline-block;
        float: right;
    }
    .modal-wrap {
        float: right;
        margin-right: 20px;
    }
`;

export const FollowDetail = styled.div `
    padding: 20px;
    background-color: hsla(0,0%,71%,.1);
    border: 1px solid #e1e1e1;
    border-radius: 4px;
    font-size: 12px;
    box-sizing: border-box;
`;

export const FollowInfo = styled.div `
    .avatar {
        float: left;
        margin-right: 10px;
        width: 48px;
        height: 48px;
        border-radius: 50%;
        border: 1px solid #ddd;
        cursor: pointer;
        display: inline-block;
    }
    .success {
        display: inline-block;
        float: right;
        margin-top: 9px;
        padding: 11px 0;
        width: 100px;
        font-size: 16px;
        border-color: #42c02e;
        background: #42c02e;
        border-radius: 40px;
        color: #fff;
        cursor: pointer;
        border: 1px solid transparent;
        text-align: center;
        .iconfont {
            margin-right: 3px;
        }
    }
    .success:hover {
        background: #3db922;
    }

    .title {
        color: #2f2f2f;
        margin-right: 3px;
        font-size: 17px;
        line-height: 1.8;
        cursor: pointer;
        vertical-align: middle;
    }

    p {
        margin: 0 0 10px;
        color: #969696;
    }
`;

export const Signature = styled.div `
    margin-top: 20px;
    padding-top: 20px;
    border-top: 1px solid #e1e1e1;
    color: #969696;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    box-sizing: border-box;
}
`;