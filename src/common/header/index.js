import React, { Component } from 'react'
import {connect} from 'react-redux'
import { CSSTransition } from 'react-transition-group'
import {actionCreators} from './store/index';
import {toJS} from 'immutable'
import {
    HeaderWrapper,
    Logo,
    Nav,
    NavItem,
    NavSearch,
    Addition,
    Button,
    SearchInfo,
    SearchWrapper,
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoItem,
    SearchInfoList

} from './style'

class Header extends Component {  



    getListArea = ()=>{
        const {list,focused,mouseIn,totalPage,page,handleMouseEnter,handleMouseLeave,handleChangePage} = this.props
        const pageList = [];
        const newList = list.toJS();
        if(newList.length){
            for(let i = (this.props.page -1)*10;i<this.props.page*10;i++){
                pageList.push(
                    <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
                )
            }
        }
        

        if(focused||mouseIn){
            return (
                <SearchInfo onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                >
                <SearchInfoTitle>热门搜索
                    <SearchInfoSwitch onClick={()=>handleChangePage(page,totalPage)}>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    {
                        pageList
                    }
                  
    
                </SearchInfoList>
            </SearchInfo>
            )
        }else{
            return null
        }
    }
    
    render() {
        return (
            <HeaderWrapper>
                <Logo href='/'/>
                <Nav>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>Aa</NavItem>
                    <SearchWrapper>
                    <CSSTransition 
                        timeout={200}
                        in={this.props.focused}
                        classNames="slide"
                    >
                        <NavSearch onBlur={this.props.handleInputBlur} onFocus={()=>this.props.handleInputFocus(this.props.list)} className={this.props.focused ? 'focused' : ''}></NavSearch>
                    </CSSTransition>
                    {this.getListArea()}
                    </SearchWrapper>
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
        focused:state.get('header').get('focused'),  //state.getIn(['header','focused'])
        list:state.get('header').get('list'),
        page:state.get('header').get('page'),
        totalPage:state.get('header').get('totalPage'),
        mouseIn:state.get('header').get('mouseIn')
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        handleInputFocus(list){
            if(list.size === 0){
                dispatch(actionCreators.getList())
            }
            dispatch(actionCreators.searchFocus())
        },
        handleInputBlur(){
            dispatch(actionCreators.searchBlur())
        },
        handleMouseEnter(){
            dispatch(actionCreators.mouseEnter())
        },
        handleMouseLeave(){
            dispatch(actionCreators.mouseLeave())
        },
        handleChangePage(page,totalPage){
            if(page<totalPage){
                dispatch(actionCreators.changePage(page+1))
            }else{
                dispatch(actionCreators.changePage(1))
            }
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);