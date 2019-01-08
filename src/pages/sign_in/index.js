import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom';

import {
  SignInWrapper,
  SignInMain,
  NormalTitle,
  SignContainer,
  InputPrepend,
  Input
} from './style';

class SignIn extends PureComponent {
  render() {
    return (
      <SignInWrapper>
        <SignInMain>
          <h4 className="title">
            <NormalTitle>
              <span className="login">登录</span>
              <b>·</b>
              <Link to="/sign_up"><span>注册</span></Link>
            </NormalTitle>
            <SignContainer>
              <form>
                <InputPrepend>
                  <i className="iconfont">&#xe68f;</i>
                  <Input type="text" placeholder="手机号或邮箱"></Input>
                </InputPrepend>
                <InputPrepend>
                  <i className="iconfont">&#xe68f;</i>
                  <Input type="password" placeholder="密码"></Input>
                </InputPrepend>

                <Input type="submit" className="sign-up-button" value="登录"></Input>
              </form>
            </SignContainer>
          </h4>
        </SignInMain>
      </SignInWrapper>
    )
  }
}

export default SignIn;