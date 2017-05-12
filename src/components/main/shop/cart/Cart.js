/**
 * Created by MyPC on 20/04/2017.
 */
import React, {Component, PropTypes,} from 'react';
import {Text, View} from "react-native";

class Cart extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: '#d6d6d6'}}>
                <Text>Cart Component</Text>
            </View>
        );
    }
}

Cart.propTypes = {};
Cart.defaultProps = {};

export default Cart;
