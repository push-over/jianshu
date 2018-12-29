import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import {


} from '../style';

class Banner extends Component {

    render() {
    
        return (
            <div>hellow</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispathToProps = (dispatch) => {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Banner);