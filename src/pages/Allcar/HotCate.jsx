import React, { Component } from 'react'
import { Grid } from "antd-mobile"
import { HotCateLayout } from "./styledAllcar"
import { get } from "../../utils/http"
import Item from 'antd-mobile/lib/popover/Item'
export default class HotCate extends Component {
    constructor() {
        super();
        this.state = {
            foodList: []
        }
    }
    async componentDidMount() {
        let response = await get({
            url: "/api/hotcate"
        });
        this.setState({
            foodList: response.map((item, index) => ({ id: index, img: item.img, title: item.title }))
        })

    }
    render() {
        const { foodList } = this.state
        return (
            <HotCateLayout>
                <header>热门分类</header>
                <Grid data={foodList}
                    isCarousel
                    carouselMaxRow={3}
                    columnNum={3}
                    hasLine={false}
                    renderItem={dataItem => (
                        <div class="item">
                            <img src={dataItem.img} /><span>{dataItem.title}</span>
                        </div>
                    )}
                />
            </HotCateLayout>
        )
    }
}
