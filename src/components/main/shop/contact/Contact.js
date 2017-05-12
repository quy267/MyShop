/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View} from "react-native";

class Contact extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#5783cc"}}>
                <Text>Contact</Text>
            </View>
        );
    }
}

Contact.propTypes = {};
Contact.defaultProps = {};

export default Contact;

