import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import {
  ListItem,
  ListInfo,
} from '../style';
class List extends Component {
  render() {
    return (
      <Fragment>
        <ListItem>
          <img
            className='pic'
            src='//upload-images.jianshu.io/upload_images/11266166-ea807cd95e9ed5ce?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
            alt=''
          />
          <ListInfo>
            <h3 className='title'>这样喝茶，等于慢性割肾</h3>
            <p className='desc'>
              这样喝茶，等于慢性割肾 [健康时尚百科](javascript:void(0);) 3天前 本文专家观点： 北京中医药大学东直门医院内肾病分泌科...
            </p>
            <div className='meta'>
              <span className='meta-info'>媒体君</span>
              <span className='meta-info'>0</span>
              <span className='meta-info'>58</span>
            </div>
          </ListInfo>
        </ListItem>
      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
      list: state.getIn(['home','articleList']),
  }
}

const mapDispathToProps = (dispatch) => {
  return {

  }
}

export default connect(mapStateToProps,mapDispathToProps)(List);