import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import Markdown from 'react-markdown';

import {
  DetailWrapper,
  DetailTitle,
  DetailAuthor,
  DetailAuthorInfo,
  DetailAuthorMeta,
  DetailContent,
  SupportAuthor,
  SupportPay,
  Supporter,
  DetailFoot,
  FollowDetail,
  FollowInfo,
  Signature
} from './style';

class Detail extends PureComponent {
  render() {
    const { data } = this.props;
    const initialSource = `
    # Live demo
    Changes are automatically rendered as you type.
    * Implements [GitHub Flavored Markdown](https://github.github.com/gfm/)
    * Renders actual, "native" React DOM elements
    * Allows you to escape or skip HTML (try toggling the checkboxes above)
    * If you escape or skip the HTML, no \`dangerouslySetInnerHTML\` is used! Yay!
    ## HTML block below
    <blockquote>
      This blockquote will change based on the HTML settings above.
    </blockquote>
    ## How about some code?
    \`\`\`js
    var React = require('react');
    var Markdown = require('react-markdown');
    React.render(
      <Markdown source="# Your markdown here" />,
      document.getElementById('content')
    );
    \`\`\`
    Pretty neat, eh?
    ## Tables?
    | Feature   | Support |
    | --------- | ------- |
    | tables    | ✔ |
    | alignment | ✔ |
    | wewt      | ✔ |
    ## More info?
    Read usage information and more on [GitHub](//github.com/rexxars/react-markdown)
    ---------------
    A component by [Espen Hovlandsdal](https://espen.codes/)
    `;
    console.log(initialSource)

    return (
      <DetailWrapper>
        {/* 文章详情 */}
        <DetailTitle>
          {data.get('title')}
        </DetailTitle>

        {/* 文章作者信息 */}
        <DetailAuthor>
          <img className='avatar' src={data.get('author_avatar')} alt='' />
          <DetailAuthorInfo>
            <span className='name'>{data.get('author_name')}</span>
            <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
            <DetailAuthorMeta>
              <span>{data.get('created_at')}</span>&nbsp;&nbsp;
                <span>字数 {data.get('wordage')}</span>&nbsp;&nbsp;
                <span>阅读 {data.get('views_count')}</span>&nbsp;&nbsp;
                <span>评论 {data.get('comments_count')}</span>&nbsp;&nbsp;
                <span>喜欢 {data.get('likes_count')}</span>
            </DetailAuthorMeta>
          </DetailAuthorInfo>
        </DetailAuthor>

        {/* 文章内容 */}
        <DetailContent dangerouslySetInnerHTML={{ __html: data.get('content') }}>
        {/* dangerouslySetInnerHTML={{ __html: data.get('content') }} */}
          {/* <img src='//upload-images.jianshu.io/upload_images/147245-e4ded9411586fcbe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp' alt='' />
          <p>杨超越的火，绝对是娱乐圈的一大玄学，在2018年还剩下最后十天的时候，比“杨超越火”更玄的事情出现了，那就是——杨超越被《中国新闻周刊》评为“2018影响中国年度人物”。</p>
          <img src='//upload-images.jianshu.io/upload_images/147245-5cf552a03ea02faa?imageMogr2/auto-orient/strip%7CimageView2/2/w/588/format/webp' alt='' />
          <p>故宫博物院院长单霁翔被评为“年度文化人物”，中国乒乓球协会主席刘国梁被评为“年度体育人物”，《我不是药神》导演文牧野被评为“年度导演”，还有火箭少女101成员杨超越被评为“年度演艺人物”。</p> */}
          {/* <Markdown source={initialSource}/> */}
        </DetailContent>

        {/* 赞赏支持 */}
        <SupportAuthor>
          <p>欢迎赞赏...</p>
          <SupportPay>赞赏支持</SupportPay>
          <Supporter></Supporter>
        </SupportAuthor>

        <DetailFoot>
          <i className="iconfont">&#xe68f;</i>
          <span>前端知识点</span>
          <span className="copyright">© 著作权归作者所有</span>
          <span className="modal-wrap">举报文章</span>
        </DetailFoot>

        {/* 文章底部作者信息 */}
        <FollowDetail>
          <FollowInfo>
            <img className="avatar" src={data.get('author_avatar')} alt=''/>
            <span className="success">
              <i className="iconfont">&#xe606;</i>
              关注
            </span>
            <span className="title">{data.get('author_name')}</span>
            <p>写了 113086 字，被 162 人关注，获得了 329 个喜欢</p>
          </FollowInfo>
          <Signature>
            {data.get('author_description')}
          </Signature>
        </FollowDetail>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.changeDetailData(this.props.match.params.id);
  }
}

const mapStateToProps = (state) => {
  return {
    data: state.getIn(['detail', 'detailData']),
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDetailData(detailId) {
      dispatch(actionCreators.getDetailInfo(detailId));
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);