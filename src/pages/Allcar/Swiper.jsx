import React, { Component } from 'react'
import { Carousel } from "antd-mobile"
import { Swiperimg } from "./styledAllcar"
import { connect } from "react-redux"
class Swiper extends Component {
    render() {
        const { list } = this.props.foodList;
        return (
            <Swiperimg>
                <Carousel
                    autoplay={false}
                    infinite
                    beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
                    afterChange={index => console.log('slide to', index)}
                >
                    {
                        list.map(item => <img src={item.img} key={item} ></img>)
                    }
                </Carousel>
            </Swiperimg >

        )
    }
}
export default connect(state => ({ foodList: state.foodList }))(Swiper)