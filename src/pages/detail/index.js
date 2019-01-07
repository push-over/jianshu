import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from './store';

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
    const { detailData } = this.props;
    
    return (
      <DetailWrapper>
        {/* 文章详情 */}
        <DetailTitle>
          {detailData.title}
        </DetailTitle>

        {/* 文章作者信息 */}
        <DetailAuthor>
          <img className='avatar' src={detailData.author_avatar} alt='' />
          <DetailAuthorInfo>
            <span className='name'>{detailData.author_name}</span>
            <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
            <DetailAuthorMeta>
              <span>{detailData.created_at}</span>&nbsp;&nbsp;
                <span>字数 {detailData.wordage}</span>&nbsp;&nbsp;
                <span>阅读 {detailData.views_count}</span>&nbsp;&nbsp;
                <span>评论 {detailData.comments_count}</span>&nbsp;&nbsp;
                <span>喜欢 {detailData.likes_count}</span>
            </DetailAuthorMeta>
          </DetailAuthorInfo>
        </DetailAuthor>

        {/* 文章内容 */}
        <DetailContent>
          {/* <img src='//upload-images.jianshu.io/upload_images/147245-e4ded9411586fcbe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp' alt='' />
          <p>杨超越的火，绝对是娱乐圈的一大玄学，在2018年还剩下最后十天的时候，比“杨超越火”更玄的事情出现了，那就是——杨超越被《中国新闻周刊》评为“2018影响中国年度人物”。</p>
          <img src='//upload-images.jianshu.io/upload_images/147245-5cf552a03ea02faa?imageMogr2/auto-orient/strip%7CimageView2/2/w/588/format/webp' alt='' />
          <p>故宫博物院院长单霁翔被评为“年度文化人物”，中国乒乓球协会主席刘国梁被评为“年度体育人物”，《我不是药神》导演文牧野被评为“年度导演”，还有火箭少女101成员杨超越被评为“年度演艺人物”。</p> */}
          {detailData.content}
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
            <img className="avatar" src={detailData.author_avatar} alt=''/>
            <span className="success">
              <i className="iconfont">&#xe606;</i>
              关注
            </span>
            <span className="title">{detailData.author_name}</span>
            <p>写了 113086 字，被 162 人关注，获得了 329 个喜欢</p>
          </FollowInfo>
          <Signature>
            {detailData.author_description}
          </Signature>
        </FollowDetail>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    this.props.changeDetailData();
  }
}

const mapStateToProps = (state) => {
  return {
    detailData: state.getIn(['detail', 'detailData'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeDetailData() {
      dispatch(actionCreators.getDetailInfo());
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Detail);