import { TabBar } from 'antd-mobile';
import React from "react"
import cook from "assets/images/cook.png"
import cookactive from "assets/images/cook-active.png"
import home from "assets/images/home.png"
import homeactive from "assets/images/home-active.png"
import location from "assets/images/location.png"
import locationactive from "assets/images/location-active.png"
import more from "assets/images/more.png"
import moreactive from "assets/images/more-active.png"
import Allcar from "../../pages/Allcar/Allcar"
export default class Tab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'Allfood',
            hidden: false,
            fullScreen: true,
        };
    }



    render() {
        return (
            <div style={this.state.fullScreen ? { position: 'fixed', height: '100%', width: '100%', top: 0 } : { height: 400 }}>
                <TabBar

                    unselectedTintColor="#666"
                    tintColor="#000"
                    barTintColor="white"
                    hidden={this.state.hidden}
                >
                    <TabBar.Item
                        title="全部美食"
                        key="Allfood"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${home}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: `url(${homeactive}) center center /  21px 21px no-repeat`
                        }}
                        />
                        }
                        selected={this.state.selectedTab === 'Allfood'}

                        onPress={() => {
                            this.setState({
                                selectedTab: 'Allfood',
                            });
                            console.log(this.props);

                        }}

                    >
                        <Allcar></Allcar>
                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${more}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${moreactive}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="美食分类"
                        key="Foodtype"

                        selected={this.state.selectedTab === 'Foodtype'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'Foodtype',
                            });
                        }}

                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${location}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: `url(${locationactive}) center center /  21px 21px no-repeat`
                            }}
                            />
                        }
                        title="美食站点"
                        key="map"

                        selected={this.state.selectedTab === 'map'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'map',
                            });
                        }}
                    >

                    </TabBar.Item>
                    <TabBar.Item
                        icon={{ uri: cook }}
                        selectedIcon={{ uri: cookactive }}
                        title="更多"
                        key="more"
                        selected={this.state.selectedTab === 'more'}
                        onPress={() => {
                            this.setState({
                                selectedTab: 'more',
                            });
                        }}
                    >

                    </TabBar.Item>
                </TabBar>
            </div >
        );
    }
}