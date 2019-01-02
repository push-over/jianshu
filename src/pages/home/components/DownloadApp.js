import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {
  DownloadAppWrapper,
  DownloadAppInfo,
  DownloadAppCode
} from '../style';

class DownloadApp extends PureComponent {
  render() {

    const { showDownloadApp, handleMouseEnter, handleMouseLeave } = this.props;

    return (
      <DownloadAppWrapper
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <img src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
        <DownloadAppInfo>
          <p className='title'>下载简书手机App</p>
          <p>随时随地发现和创作内容</p>
        </DownloadAppInfo>

        {showDownloadApp ?
          <DownloadAppCode className='download-app'>
            <img src='http://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='' />
          </DownloadAppCode> :
          null
        }

      </DownloadAppWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    showDownloadApp: state.getIn(['home', 'showDownloadApp'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleMouseEnter() {
      dispatch(actionCreators.mouseEnter());
    },

    handleMouseLeave() {
      dispatch(actionCreators.mouseLeave());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DownloadApp);