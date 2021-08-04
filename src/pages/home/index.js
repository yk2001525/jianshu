import React, { Component } from 'react'
import Topic from './components/Topic'
import List from './components/List'
import Writer from './components/Writer'
import Recommend from './components/Recommend'

import {
    HomeWrapper,
    HomeRight,
    HomeLeft
} from './style'

export default class Home extends Component {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                  <Topic></Topic>
                  <List></List>
                </HomeLeft>
                <HomeRight>
                    <Recommend> </Recommend>
                    <Writer></Writer>
                </HomeRight>
            </HomeWrapper>
        )
    }
}
