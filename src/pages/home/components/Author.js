import React, { PureComponent } from 'react'
import { connect } from 'react-redux';
import {
    AuthorWrapper,
    AuthorTitle,
    AuthorList,
    AuthorItem,
    AuthorMore
} from '../style';

class Author extends PureComponent {
    render() {
        const { authorList, handleChangePage } = this.props;
        return (
            <AuthorWrapper>
                <AuthorTitle>
                    <span className='title'>推荐作者</span>
                    <span className='page-change' onClick={() => handleChangePage(this.spinIcon)}>
                        <i ref={(icon) => { this.spinIcon = icon }} className="iconfont">&#xe602;</i>
                        换一批
                    </span>
                </AuthorTitle>
                <AuthorList>
                    {
                        authorList.map((item) => {
                            return (
                                <AuthorItem key={item.get('id')}>
                                    <img src={item.get('avatar')} alt='' />
                                    <span className='follow'><i className="iconfont">&#xe606;</i>关注</span>
                                    <span className='name'>{item.get('name')}</span>
                                    <p>写了{item.get('word_number')}字 · {item.get('like')}喜欢</p>
                                </AuthorItem>
                            )
                        })
                    }

                    <AuthorMore>
                        查看更多
                <i className="iconfont">&#xe605;</i>
                    </AuthorMore>
                </AuthorList>
            </AuthorWrapper>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        authorList: state.getIn(['home', 'authorList'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        handleChangePage(spin) {
            let originAngle = spin.style.transform.replace(/[^0-9]/ig,'');
            if(originAngle) {
                originAngle = parseInt(originAngle,10);
            }else {
                originAngle = 0;
            }
            spin.style.transform = 'rotate('+originAngle+360+'deg)';

            console.log(originAngle)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Author);