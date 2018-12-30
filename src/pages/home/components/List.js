import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';

import {
  ListItem,
  ListInfo,
  LoadMore
} from '../style';
class List extends PureComponent {
  render() {
    const { list, page, getMoreList } = this.props;
    return (
      <Fragment>
        {
          list.map((item, index) => {
            return (
              <ListItem key={index}>
                <img
                  className='pic'
                  src={item.get('imgUrl')}
                  alt=''
                />
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='desc'>
                    {item.get('desc')}
                  </p>
                  <div className='meta'>
                    <span className='meta-info'>媒体君</span>
                    <span className='meta-info'>0</span>
                    <span className='meta-info'>58</span>
                  </div>
                </ListInfo>
              </ListItem>
            )
          })
        }
        <LoadMore
          className='load-more'
          onClick={() => getMoreList(page)}
        >
          阅读更多
        </LoadMore>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
    page: state.getIn(['home', 'articlePage'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getMoreList(page) {
      dispatch(actionCreators.getMoreList(page));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);