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

class SignUp extends PureComponent {
  render() {
    return (
      <SignInWrapper>
        <SignInMain>
          <h4 className="title">
            <NormalTitle>
              <Link to="/sign_in"><span>登录</span></Link>
              <b>·</b>
              <span className="register">注册</span>
            </NormalTitle>
            <SignContainer>
              <form>
                <InputPrepend>
                  <i className="iconfont">&#xe68f;</i>
                  <Input type="text" placeholder="你的昵称"></Input>
                </InputPrepend>
                <InputPrepend>
                  <i className="iconfont">&#xe68f;</i>
                  <Input type="text" placeholder="手机号"></Input>
                </InputPrepend>
                <InputPrepend>
                  <i className="iconfont">&#xe68f;</i>
                  <Input type="password" placeholder="密码"></Input>
                </InputPrepend>

                <Input type="submit" className="sign-up-button" value="注册"></Input>

                <p>
                  点击 “注册” 即表示您同意并愿意遵守简书
                  <br/>
                  <span>用户协议</span>&nbsp;和&nbsp;<span>隐私政策。</span>
                </p>
              </form>
            </SignContainer>
          </h4>
        </SignInMain>
      </SignInWrapper>
    )
  }
}

export default SignUp;