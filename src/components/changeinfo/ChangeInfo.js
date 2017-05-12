/**
 * Created by MyPC on 20/04/2017.
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import {Text, View, TouchableOpacity} from "react-native";

class ChangeInfo extends Component {

    goBackToMain() {
        const navigator = this.props.navigator;
        navigator.pop();
    }

    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#5b4287"}}>
                <Text>ChangeInfo Component</Text>
                <TouchableOpacity onPress={this.goBackToMain.bind(this)}>
                    <Text>Go back to Main</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

ChangeInfo.propTypes = {};
ChangeInfo.defaultProps = {};

export default ChangeInfo;

