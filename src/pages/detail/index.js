import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import ReactMarkdown from 'react-markdown';
// import SyntaxHighlighter from 'react-syntax-highlighter';
// import { docco } from 'react-syntax-highlighter/dist/styles/hljs';

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
        <DetailContent>
        
        {/* <SyntaxHighlighter  style={docco} language='javascript'>
        
        </SyntaxHighlighter> */}

        <ReactMarkdown source={data.get('content') } 
          escapeHtml={false}
          renderers={{ code: ({ value }) => <ReactMarkdown source={value} />}}/>
          >
    
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
            <img className="avatar" src={data.get('author_avatar')} alt='' />
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

export default connect(mapStateToProps, mapDispatchToProps)(Detail);