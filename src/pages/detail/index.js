import React, { PureComponent } from 'react';

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
    return (
      <DetailWrapper>
        {/* 文章详情 */}
        <DetailTitle>
          杨超越获2018年度演艺人物，她演了啥？ 一条锦鲤吗？
        </DetailTitle>

        {/* 文章作者信息 */}
        <DetailAuthor>
          <img className='avatar' src='//upload.jianshu.io/users/upload_avatars/147245/f6d3f69dec9e.jpeg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' alt='' />
          <DetailAuthorInfo>
            <span className='name'>凌千一</span>
            <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
            <DetailAuthorMeta>
              <span>2018.12.21 17:59</span>&nbsp;&nbsp;
                <span>字数 2607</span>&nbsp;&nbsp;
                <span>阅读 1607</span>&nbsp;&nbsp;
                <span>评论 4</span>&nbsp;&nbsp;
                <span>喜欢 17</span>
            </DetailAuthorMeta>
          </DetailAuthorInfo>
        </DetailAuthor>

        {/* 文章内容 */}
        <DetailContent>
          <img src='//upload-images.jianshu.io/upload_images/147245-e4ded9411586fcbe.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/600/format/webp' alt='' />
          <p>杨超越的火，绝对是娱乐圈的一大玄学，在2018年还剩下最后十天的时候，比“杨超越火”更玄的事情出现了，那就是——杨超越被《中国新闻周刊》评为“2018影响中国年度人物”。</p>
          <img src='//upload-images.jianshu.io/upload_images/147245-5cf552a03ea02faa?imageMogr2/auto-orient/strip%7CimageView2/2/w/588/format/webp' alt='' />
          <p>故宫博物院院长单霁翔被评为“年度文化人物”，中国乒乓球协会主席刘国梁被评为“年度体育人物”，《我不是药神》导演文牧野被评为“年度导演”，还有火箭少女101成员杨超越被评为“年度演艺人物”。</p>
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
            <img className="avatar" src='//upload.jianshu.io/users/upload_avatars/4041074/79878f31-c8ae-4087-880c-bc2185837f1d.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96' alt=''/>
            <span className="success">
              <i className="iconfont">&#xe606;</i>
              关注
            </span>
            <span className="title">ywyan</span>
            <p>写了 113086 字，被 162 人关注，获得了 329 个喜欢</p>
          </FollowInfo>
          <Signature>
          天道酬勤，思者常新；博观约取，厚积薄发；心如止水，气贯长虹；淡漠明志，宁静致远。微信公众号：“前端技术博文”，欢迎关注！
          </Signature>
        </FollowDetail>
      </DetailWrapper>
    )
  }
}

export default Detail;