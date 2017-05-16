/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View, TouchableOpacity} from "react-native";
import Menu from "./Menu";
import Shop from "./shop/Shop";
import Drawer from 'react-native-drawer';


class Main extends Component {

    closeControlPanel = () => {
        this.drawer.close()
    };

    openControlPanel = () => {
        this.drawer.open()
    };

    componentDidMount(){
        this.drawer.open();
    }

    render() {
        const navigator = this.props.navigator;
        return (
            <Drawer
                ref={(ref) => {
                    this.drawer = ref;
                }}
                content={<Menu navigator={navigator}/>}
                openDrawerOffset={0.4}
                tapToClose={true}
            >
                <Shop open={this.openControlPanel.bind(this)}/>
            </Drawer>
        );
    }
}

Main.propTypes = {};
Main.defaultProps = {};

export default Main;

