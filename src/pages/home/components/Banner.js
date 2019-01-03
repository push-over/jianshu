import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import Carousel from 'antd/lib/carousel';
import 'antd/lib/carousel/style/index.css';
import {
    BannerWrapper,
    BannerDirection,
    Direction,
} from '../style';

class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.chooseIndex = null;
    }

    changeIndex(index) {
        this.chooseIndex.goTo(index);
    }
    render() {
        const { list, showcarousel, handleMouseEnter, handleMouseLeave } = this.props;
        return (
            <BannerWrapper
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
            >
                <Carousel
                    autoplay
                    ref={el => { this.chooseIndex = el; }}
                >
                    {
                        list.map((item) => {
                            return <img key={item.get('id')} src={item.get('imgUrl')} alt='' />
                        })
                    }
                </Carousel>
                {
                    showcarousel ?
                        <BannerDirection>
                            <Direction className='prev' onClick={() => this.changeIndex(this.chooseIndex.prev())}>
                                <i className="iconfont">&#xe600;</i>
                            </Direction>
                            <Direction className='next' onClick={() => this.changeIndex(this.chooseIndex.next())}>
                                <i className="iconfont">&#xe644;</i>
                            </Direction>
                        </BannerDirection> :
                        null
                }
            </BannerWrapper>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'bannerList']),
        showcarousel: state.getIn(['home', 'showcarousel'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleMouseEnter() {
            dispatch(actionCreators.bannerMouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.bannerMouseLeave());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Banner);