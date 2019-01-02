import styled from 'styled-components';
import logo from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
    position: fixed;
    z-index: 9999;
    background: #fff;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`;

export const Logo = styled.div`
    position: absolute;
    float: right;
    top: 0;
    left: -155px;
    display: block;
    width: 100px;
    height: 56px;
    background: url(${logo});
    background-size: contain;
`;

export const Nav = styled.div`
    width: 960px;
    height: 100%;
    margin: 0 auto;
    padding-right: 70px;
    box-sizing: border-box;
    position: relative;

`;

export const NavItem = styled.div`
    line-height: 56px;
    padding: 0 15px;
    color: #333;
    font-size: 17px;
    cursor: pointer;
    &.left {
        float: left;
    }
    &.right {
        font-size: 15px;
        float: right;
        color: #969696;
        .mode-btn {
            line-height: 53px;
        }
    }
    &.active {
        color: #ea6f5a;
    }
    &.app-download:hover {
        background: hsl(0, 0%, 96%);
    }   
`;

export const SearchWrapper = styled.div`
    position: relative;
    float: left; 
    .iconfont {
        cursor: pointer;
        position: absolute;
        right: 5px;
        bottom: 4px
        width: 30px;
        height: 30px;
        border-radius: 15px;
        text-align: center;
        line-height: 30px;
        color: #969696;
        font-size: 19px;
        &.focused {
            color: #fff;
            background: hsl(0, 0%, 59%);
        }
    }
`;

export const NavSearch = styled.input.attrs({
    placeholder: '搜索'
})`
    width: 160px;
    height: 38px;
    padding: 0 30px 0 20px;
    margin-top: 9px;
    margin-left: 20px;
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 19px;
    font-size: 14px;
    background: #eee;
    color: #666;
    &::placeholder {
        color: #999;
    }
    &.focused {
        width: 240px;
    }
    &.slide-enter {
        transition: all .3s ease-out;
    }
    &.slide-enter-active {
        width: 240px;
    }
    &.slide-exit {
        transition: all .3s ease-out;
    }
    &.slide-exit-active {
        width: 160px;
    }
`;

export const SearchInfo = styled.div`  
    z-index: 999999;
    background: #fff;
    position: absolute;
    left: 20px;
    top: 56px;
    width: 250px;
    padding: 0 20px;
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0, 0, 0, .2);
    &::before {
        content: "";
        left: 27px;
        width: 20px;
        height: 20px;
        transform: rotate(45deg);
        position: absolute;
        background-color: #fff;
        top: -5px;
    }
`;

export const SearchInfoTitle = styled.div`
    margin-top: 20px;
    margin-bottom: 15px;
    line-height: 20px;
    color: #969696;
    font-size: 14px;
`;

export const SearchInfoSwitch = styled.span`
    position: relative;
    float: right;
    font-size: 13px;
    cursor: pointer;
    .iconfont {
        font-size: 13px;
        top: -5px;
        left: -27px;
        font-weight: 600;
        position: absolute;
        transform: rotate(90deg);
        &.slide-enter {
            transition: all .3s ease-out;
        }
        &.slide-enter-active {
            transform: rotate(90deg);
        }
        &.slide-exit {
            transition: all .3s ease-out;
        }
        &.slide-exit-active {
            transform: rotate(450deg)
        }
    }
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.div`
    line-height: 20px;
    float: left;
    margin-right: 10px;
    margin-bottom: 12px;
    padding: 0 5px;
    font-size: 12px;
    border: 1px solid #ddd;
    box-sizing: border-box;
    border-radius: 3px;
    color: #787878;
    cursor: pointer;
`;

export const Addition = styled.div`
    position: absolute;
    right: -160px;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-right: 20px;
    border-radius: 20px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid transparent;
    text-align: center;
    font-weight: 400
    vertical-align: middle;
    &.write {
        line-height: 38px;
        margin-top: 8px;
        height: 40px;
        width: 100px;
        color: #fff;
        background: #ea6f5a;
        .iconfont {
            vertical-align: middle;
            font-size: 20px;
            margin-right: 3px;
        }
    }
    &.write:hover {
        background-color: #ec6149;
    }
    &.sign-up {
        margin-top: 9px;
        line-height: 38px;
        height: 38px;
        width: 80px;
        color: #ea6f5a;
        border: 1px solid rgba(236,97,73,.7);
    }
    &.sign-up:hover {
        color: #ec6149;
        background-color: rgba(236,97,73,.05)
    }
`;
