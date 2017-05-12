/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View, TouchableOpacity} from "react-native";

class Authentication extends Component {

    goBackToMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#dff5c9"}}>
                <Text>Authentication Component</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

Authentication.propTypes = {};
Authentication.defaultProps = {};

export default Authentication;

