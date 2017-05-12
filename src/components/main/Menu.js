/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View, TouchableOpacity} from "react-native";

class Menu extends Component {

    goToAuthentication() {
        const navigator = this.props.navigator;
        navigator.push({name: "AUTHENTICATION"});
    }

    goToChangeInfo() {
        const navigator = this.props.navigator;
        navigator.push({name: "CHANGE_INFO"});
    }

    goToOrderHistory() {
        const navigator = this.props.navigator;
        navigator.push({name: "ORDER_HISTORY"});
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#213052'}}>
                <Text>Component Menu</Text>
                <TouchableOpacity onPress={this.goToAuthentication.bind(this)}>
                    <Text>Go to Authentication</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeInfo.bind(this)}>
                    <Text>Go to ChangeInfo</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToOrderHistory.bind(this)}>
                    <Text>Go to OrderHistory</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;

