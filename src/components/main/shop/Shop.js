/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from "react";
import {View, Dimensions} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Contact from './contact/Contact';
import Search from './search/Search';
import Cart from './cart/Cart';
import Header from './Header';


const {height} = Dimensions.get('window');

class Shop extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            selectedTab: 'Home',
        };
    }

    openMenu() {
        const open = this.props.open;
        open();
    }


    render() {
        return (
            <View style={{flex: 1}}>
                <Header onOpen={this.openMenu.bind(this)}/>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'Home'}
                        title="Home"
                        onPress={() => this.setState({selectedTab: 'Home'})}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({selectedTab: 'cart'})}>
                        <Cart/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({selectedTab: 'search'})}>
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({selectedTab: 'contact'})}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

Shop.propTypes = {};
Shop.defaultProps = {};

export default Shop;

