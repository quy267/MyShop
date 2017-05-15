/**
 * Created by MyPC on 12/05/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {View, Dimensions, StyleSheet, Text, Image} from "react-native";
import bannerImage from '../../../../media/temp/banner.jpg'

const {width, height} = Dimensions.get('window');

class Collection extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flex: 1, justifyContent: 'center', paddingTop: 1.5 }}>
                    <Text style={styles.textStyle}>SPRING COLLECTION</Text>
                </View>
                <View style={{flex: 4, justifyContent: 'flex-end'}}>
                    <Image source={bannerImage} style={styles.imageStyle}/>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = (imageWidth / 933) * 465;

const styles = StyleSheet.create({
    wrapper: {
        height: height * 0.35,
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        padding: 10,
        paddingTop: 0,
    },

    textStyle: {
        fontSize: 20,
        color: '#afafaf',
    },

    imageStyle: {
        height: imageHeight,
        width: imageWidth
    }


});

Collection.propTypes = {};
Collection.defaultProps = {};

export default Collection;

