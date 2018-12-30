import styled from 'styled-components';
import logo from '../../statics/nav-logo.png';

export const HeaderWrapper = styled.div`
    position: relative;
    height: 56px;
    border-bottom: 1px solid #f0f0f0;
    box-sizing: border-box;
`;

export const Logo = styled.a.attrs({
    href: '/'
})`
    position: absolute;
    top: 0;
    left: 0;
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
        float: right;
        color: #969696;
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
    float: right;
    font-size: 13px;
    cursor: pointer;
`;

export const SearchInfoList = styled.div`
    overflow: hidden;
`;

export const SearchInfoItem = styled.a`
    display: block;
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
    right: 0;
    top: 0;
    height: 56px;
`;

export const Button = styled.div`
    float: right;
    margin-top: 9px;
    margin-right: 20px;
    padding: 0 20px;
    line-height: 38px;
    border-radius: 19px;
    font-size: 15px;
    cursor: pointer;
    border: 1px solid transparent;
    &.write {
        color: #fff;
        background: #ea6f5a;
    }
    &.write:hover {
        background-color: #ec6149;
    }
    &.sign-up {
        color: #ea6f5a;
        border: 1px solid rgba(236,97,73,.7);
    }
    &.sign-up:hover {
        color: #ec6149;
        background-color: rgba(236,97,73,.05)
    }
`;
