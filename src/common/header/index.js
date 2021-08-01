import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {actionCreators} from './store/index';
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button

} from './style'
class Header extends Component {  

    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <CSSTransition 
                        timeout={200}
                        in={this.props.focused}
                        classNames="slide"
                    >
                        <NavSearch onBlur={this.props.handleInputBlur} onFocus={this.props.handleInputFocus} className={this.props.focused ? 'focused' : ''}></NavSearch>
                    </CSSTransition>
                </Nav>
                <Addition>
                    <Button className="reg">注册</Button>
                    <Button className="writing">写文章</Button>

                </Addition>
            </HeaderWrapper>
        )
    }
}


const mapStateToProps =(state)=>{
    return {
        focused:state.get('header').get('focused')  //state.getIn(['header','focused'])
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(){
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Header);