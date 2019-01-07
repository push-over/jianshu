import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { actionCreators as detailActionCreators } from '../../detail/store';
import { Link } from 'react-router-dom';

import {
  ListItem,
  ListInfo,
  LoadMore,
  Line
} from '../style';
class List extends PureComponent {
  render() {
    const { list, page, getMoreList, changeDetailData } = this.props;
    return (
      <Fragment>
        <Line></Line>
        {
          list.map((item, index) => {
            return (
              <ListItem className='list' key={index}>
                <Link to='/detail'>
                  <img
                    className='pic'
                    src={item.get('imgUrl')}
                    alt=''
                  />
                </Link>
                <ListInfo>
                  <Link to={'/detail/' + item.get('id')}>
                    <h3 
                      className='title'
                      onClick={() => changeDetailData(item.get('id'))}
                    >
                      {item.get('title')}
                    </h3>
                  </Link>
                  <p className='desc'>
                    {item.get('desc')}
                  </p>
                  <div className='meta'>
                    <span className='meta-info'>媒体君</span>
                    <span className='meta-info comments'><i className="iconfont">&#xe622;</i>0</span>
                    <span className='meta-info'><i className="iconfont">&#xe604;</i>58</span>
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
    },

    changeDetailData(detailId) {
      dispatch(detailActionCreators.getDetailInfo(detailId));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);