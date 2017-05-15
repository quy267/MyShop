/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View} from "react-native";
import Collection from './Collection';
import Category from './Category';

class Home extends Component {
    render() {
        return (
            <View style={{flex: 1, backgroundColor: "#dbdbdb"}}>
                <Collection/>
                <Category/>
            </View>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

