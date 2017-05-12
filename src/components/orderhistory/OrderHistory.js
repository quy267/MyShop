/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, TouchableOpacity, View} from "react-native";

class OrderHistory extends Component {

    goBackToMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#2d86ff"}}>
                <Text>OrderHistory Component</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

OrderHistory.propTypes = {};
OrderHistory.defaultProps = {};

export default OrderHistory;

