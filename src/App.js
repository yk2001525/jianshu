import React, { Component } from 'react'
import Header from './common/header'
import {GlobalStyled} from './style'
import store from './store'
import { Provider } from 'react-redux'
export default class App extends Component {
  render() {
    return (
      <div>
        <Provider store={store}>
        <Header></Header>
        <GlobalStyled></GlobalStyled>
        </Provider>

      </div>
    )
  }
}
