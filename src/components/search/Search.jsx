import React, { Component } from 'react'
import searchimg from "assets/images/search.png"
import { SearchWrap } from "./styledSearch"
export default class Search extends Component {
    render() {
        return (
            <SearchWrap color={"orange"} width={"2px"}>
                <img src={searchimg} />
                <span>想吃什么特色菜,比如老八小汉堡</span>
            </SearchWrap>

        )
    }
}
