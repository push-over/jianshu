import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    SearchWrapper,
    NavSearch,
    SearchInfo,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
    Addition,
    Button,
} from './style';

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tt: 90
        }
    }
    render() {
        const { focused, list, handleInputFocus, handleInputBlur } = this.props;
        return (

                <HeaderWrapper>
                    <Nav>
                        <Link to='/'>
                            <Logo />
                        </Link>
                        <Link to='/'>
                            <NavItem className='left active'>首页</NavItem>
                        </Link>
                        <NavItem className='left app-download'>下载App</NavItem>
                        <Link to='/sign_in'>
                            <NavItem className='right' >登录</NavItem>
                        </Link>
                        <NavItem className='right'>
                            <i className="iconfont mode-btn">&#xe685;</i>
                        </NavItem>
                        <SearchWrapper>
                            <CSSTransition
                                in={focused}
                                timeout={1000}
                                classNames="slide"
                            >
                                <NavSearch
                                    className={focused ? 'focused' : ''}
                                    onFocus={() => handleInputFocus(list)}
                                    onBlur={handleInputBlur}
                                />
                            </CSSTransition>
                            <i className={focused ? 'focused iconfont' : 'iconfont'}>&#xe61d;</i>
                            {this.getListArea()}
                        </SearchWrapper>
                        <Addition>
                            <Button className='write'>
                                <i className="iconfont">&#xe68f;</i>
                                写文章
                                </Button>
                            <Link to="/sign_up">
                                <Button className='sign-up'>注册</Button>
                            </Link>
                        </Addition>
                    </Nav>
                </HeaderWrapper>
        )
    }

    getListArea() {

        const { focused, list, page, mouseIn, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;

        const newList = list.toJS();
        const pageList = [];

        if (newList.length) {
            for (let i = (page - 1) * 10; i < page * 10; i++) {
                if (newList[i] !== undefined) {
                    pageList.push(
                        <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                    )
                }
            }
        }

        if (focused || mouseIn) {
            return (
                <SearchInfo>
                    <SearchInfoTitle
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        热门搜索
                        <SearchInfoSwitch
                            className='title'
                            onClick={() => handleChangePage(page, totalPage,this.spinIcon)}
                        >
                            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont">&#xe602;</i>
                            换一批
                        </SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            )
        } else {
            return null;
        }
    }

}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
        list: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage']),
        mouseIn: state.getIn(['header', 'mouseIn'])
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus(list) {
            if (list.size === 0) {
                dispatch(actionCreators.getList());
            }
            dispatch(actionCreators.searchFocus());
        },

        handleInputBlur() {
            dispatch(actionCreators.serachBlur());
        },

        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },

        handleMouseLeave() {
            dispatch(actionCreators.mounseLeave());
        },

        handleChangePage(page, totalPage,spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+originAngle+360+'deg)';
            if (page < totalPage) {
                dispatch(actionCreators.changePage(page + 1));
            } else {
                dispatch(actionCreators.changePage(1));
            }
        }
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);