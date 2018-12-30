import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Carousel from 'antd/lib/carousel';
import {
    BannerWrapper
} from '../style';

class Banner extends PureComponent {
    render() {
        return (
            <BannerWrapper>
                <Carousel autoplay>
                    {
                        this.props.list.map((item) => {
                            return <img key={item.get('id')} src={item.get('imgUrl')} alt='' />
                        })
                    }
                </Carousel>
            </BannerWrapper>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'bannerList']),
    }
}

export default connect(mapStateToProps, null)(Banner);