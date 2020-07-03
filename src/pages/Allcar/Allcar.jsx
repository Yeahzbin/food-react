import React, { Component } from 'react'
import Header from "../../components/header/Header"
import Swiper from "./Swiper"
import Search from "../../components/search/Search"
import HotCate from "./HotCate"
export default class Allcar extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Swiper></Swiper>
                <Search></Search>
                <HotCate></HotCate>
            </div>
        )
    }
}
