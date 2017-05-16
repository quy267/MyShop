/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {ScrollView, Text, View} from "react-native";
import Collection from './Collection';
import Category from './Category';
import TopProduct from './TopProduct';

class Home extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: "#dbdbdb"}}>
                <Collection/>
                <Category/>
                <TopProduct/>
            </ScrollView>
        );
    }
}

Home.propTypes = {};
Home.defaultProps = {};

export default Home;

