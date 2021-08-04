import React, { Component } from 'react'
import Header from './common/header'
import {GlobalStyled} from './style'
import store from './store'
import { Provider } from 'react-redux'
import { BrowserRouter,Route } from 'react-router-dom'
import Home from './pages/home'
import Detail from './pages/detail'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
          <div>
        <Header></Header>
        <BrowserRouter>
          <Route path='/' exact component={Home}></Route>
          <Route path='/detail' exact component={Detail}></Route>
        </BrowserRouter>
        <GlobalStyled></GlobalStyled>
        </div>
        </Provider>

      </div>
    )
  }
}
