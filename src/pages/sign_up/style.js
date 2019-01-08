import styled from 'styled-components';

export const SignInWrapper = styled.div `
    margin-top: 55px;
    height: 100%;
    min-height: 750px;
    text-align: center;
    font-size: 14px;
    background-color: #f1f1f1;
`;

export const SignInMain = styled.div `
    width: 400px;
    margin: 60px auto 0;
    padding: 50px 50px 30px;
    background-color: #fff;
    border-radius: 4px;
    box-shadow: 0 0 8px rgba(0,0,0,.1);
    vertical-align: middle;
    display: inline-block;
    box-sizing: border-box;
    .title {
        margin: 0 auto 50px;
        padding: 10px;
        color: #969696;
        font-size: 18px;
    }
`;

export const NormalTitle = styled.div `
    a {
        text-decoration: none;
    }
    span {
        cursor: pointer;
        padding: 10px;
        color: #969696;
        box-sizing: border-box;
    }
    .register {
        border-bottom: 2px solid #ea6f5a;
    }
    span:hover {
        border-bottom: 2px solid #ea6f5a;
    }
    b {
        padding: 10px;
        font-weight: 700;
    }
`;


export const SignContainer = styled.div `
    margin-top: 30px;
    .sign-up-button {
        margin-top: 20px;
        width: 100%;
        padding: 7px 18px;
        font-size: 18px;
        border: none;
        border-radius: 25px;
        color: #fff;
        background: #42c02e;
        cursor: pointer;
        outline: none;
        display: block;
        clear: both;
        box-sizing: border-box;
        height: 40px;
    }   
    
    p {
        margin: 10px 0;
        padding: 0;
        text-align: center;
        font-size: 12px;
        line-height: 20px;
        color: #969696;

        span {
            cursor: pointer;
            color: #3194d0;
        }
    }
`;

export const InputPrepend = styled.div `
    position: relative;
    width: 100%;
    margin-bottom: 0;
    box-sizing: border-box;
    input:focus {
        outline: none;
    }
    i {
        position: absolute;
        top: 14px;
        left: 10px;
        font-size: 18px;
        color: #969696;
    }
`;

export const Input = styled.input `
    border-bottom: none;
    width: 100%;
    height: 50px;
    margin-bottom: 0;
    padding: 4px 12px 4px 35px;
    border: 1px solid #c8c8c8;
    border-radius: 0 0 4px 4px;
    background-color: hsla(0,0%,71%,.1);
    vertical-align: middle;
    box-sizing: border-box;
`;