import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { actionCreators } from '../store';
import Carousel from 'antd/lib/carousel';
import {
    BannerWrapper
} from '../style';

class Banner extends Component {
    render() {
        return (
            <BannerWrapper>
                <Carousel 
                    autoplay
                >
                    {
                        this.props.list.map((item) => {
                            return <img key={item.get('id')} src={item.get('imgUrl')} alt=''/>
                        })
                    }
                </Carousel>
            </BannerWrapper>

        )
    }
}

const mapStateToProps = (state) => {
    return {
        list: state.getIn(['home', 'list']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Banner);