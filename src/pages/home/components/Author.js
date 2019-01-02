import React, { PureComponent } from 'react'

import {
  AuthorWrapper,
  AuthorTitle,
  AuthorList,
  AuthorItem,
  AuthorMore
} from '../style';

class Author extends PureComponent {
  render() {
    return (
      <AuthorWrapper>
          <AuthorTitle>
              <span className='title'>推荐作者</span>
              <span className='page-change'><i className="iconfont">&#xe602;</i>换一批</span>
          </AuthorTitle>
          <AuthorList>
              <AuthorItem>
                  <img src='//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                  <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                  <span className='name'>名贵的考拉熊</span>
                  <p>写了276.9k字 · 17.5k喜欢</p>
              </AuthorItem>
              <AuthorItem>
                  <img src='//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                  <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                  <span className='name'>名贵的考拉熊</span>
                  <p>写了276.9k字 · 17.5k喜欢</p>
              </AuthorItem>
              <AuthorItem>
                  <img src='//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                  <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                  <span className='name'>名贵的考拉熊</span>
                  <p>写了276.9k字 · 17.5k喜欢</p>
              </AuthorItem>
              <AuthorItem>
                  <img src='//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                  <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                  <span className='name'>名贵的考拉熊</span>
                  <p>写了276.9k字 · 17.5k喜欢</p>
              </AuthorItem>
              <AuthorItem>
                  <img src='//upload.jianshu.io/users/upload_avatars/7663825/7c28763e-002b-4e89-8dea-5b8da210ef2c.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp' alt='' />
                  <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                  <span className='name'>名贵的考拉熊</span>
                  <p>写了276.9k字 · 17.5k喜欢</p>
              </AuthorItem>
              <AuthorMore>
                查看更多
                <i className="iconfont">&#xe605;</i>
              </AuthorMore>
          </AuthorList>
      </AuthorWrapper>
    )
  }
}

export default Author;