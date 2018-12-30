import React, { Component, Fragment } from 'react';

import { connect } from 'react-redux';

import {
  ListItem,
  ListInfo,
} from '../style';
class List extends Component {
  render() {
    const { list } = this.props;
    return (
      <Fragment>
        {
          list.map((item) => {
            return (
              <ListItem key={item.get('id')}>
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

      </Fragment>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    list: state.getIn(['home', 'articleList']),
  }
}

export default connect(mapStateToProps, null)(List);