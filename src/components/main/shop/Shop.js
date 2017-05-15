/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from "react";
import {View, Dimensions, Image, StyleSheet} from "react-native";
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/Home';
import Contact from './contact/Contact';
import Search from './search/Search';
import Cart from './cart/Cart';
import Header from './Header';
import homeIconS from '../../../media/appIcon/home.png';
import homeIcon from '../../../media/appIcon/home0.png';
import cartIconS from '../../../media/appIcon/cart.png';
import cartIcon from '../../../media/appIcon/cart0.png';
import searchIconS from '../../../media/appIcon/search.png';
import searchIcon from '../../../media/appIcon/search0.png';
import contactIconS from '../../../media/appIcon/contact.png';
import contactIcon from '../../../media/appIcon/contact0.png';


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
                        onPress={() => this.setState({selectedTab: 'Home'})}
                        renderIcon={() => <Image source={homeIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={homeIconS} style={styles.iconStyle}/>}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir'}}
                    >
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        onPress={() => this.setState({selectedTab: 'cart'})}
                        renderIcon={() => <Image source={cartIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={cartIconS} style={styles.iconStyle}/>}
                        badgeText="1"
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir'}}
                    >
                        <Cart/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        onPress={() => this.setState({selectedTab: 'search'})}
                        renderIcon={() => <Image source={searchIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={searchIconS} style={styles.iconStyle}/>}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir'}}
                    >
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        onPress={() => this.setState({selectedTab: 'contact'})}
                        renderIcon={() => <Image source={contactIcon} style={styles.iconStyle}/>}
                        renderSelectedIcon={() => <Image source={contactIconS} style={styles.iconStyle}/>}
                        selectedTitleStyle={{color: '#34b089', fontFamily: 'Avenir'}}
                    >
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}

const styles = StyleSheet.create({
        iconStyle: {
            width: 20,
            height: 20
        }

    })
;

Shop.propTypes = {};
Shop.defaultProps = {};

export default Shop;

