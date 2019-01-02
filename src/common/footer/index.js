import React, { Component } from 'react'

import {
    FooterWrapper,
    FooterRow,
    FooterInfo,
    FooterIcp
} from './style';

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterRow></FooterRow>
        <FooterInfo>
            <span>关于简书</span><em> · </em>
            <span>联系我们</span><em> · </em>
            <span>加入我们</span><em> · </em>
            <span>简书出版</span><em> · </em>
            <span>品牌与徽标</span><em> · </em>
            <span>帮助中心</span><em> · </em>
            <span>合作伙伴</span><em> · </em>
            <FooterIcp>
                ©2012-2018 上海佰集信息科技有限公司 / 简书 / 沪ICP备11018329号-5 /
                &nbsp;<img src='http://cdn2.jianshu.io/assets/web/smrz-557fa318122c99a66523209bf9753a27.png' alt='' />
                &nbsp;沪公网安备31010402002252号 / 
                &nbsp;<img src='http://cdn2.jianshu.io/assets/web/wxb-a216456895eb66c17497dbd3da443cf8.png' alt='' />
                &nbsp;举报电话：021-34770013 /
                &nbsp;<img src='http://cdn2.jianshu.io/assets/web/zggsrz-5695587dccf490ca3e651f4228f7479e.png' alt='' />
            </FooterIcp>
        </FooterInfo>
      </FooterWrapper>
    )
  }
}

export default Footer;
