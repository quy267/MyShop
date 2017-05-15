/**
 * Created by MyPC on 13/05/2017.
 */
import React, {
    Component,
    PropTypes,
} from 'react';
import {Image, Text, View, StyleSheet, Dimensions} from "react-native";
import Swiper from 'react-native-swiper';
import littlecon from '../../../../media/temp/little.jpg';
import maxiIcon from '../../../../media/temp/maxi.jpg';
import partyIcon from '../../../../media/temp/party.jpg';

const {width, height} = Dimensions.get('window');

class Category extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{flex: 1, justifyContent: 'center', paddingTop: 2}}>
                    <Text style={styles.textStyle}>LIST OF CATEGORY</Text>
                </View>
                <View style={{flex: 4, justifyContent: 'flex-end'}}>
                    <Swiper width={imageWidth} height={imageHeight}>
                        <Image source={littlecon} style={styles.imageStyle}>
                            <Text style={styles.cateTitle}>Maxi Dress</Text>
                        </Image>
                        <Image source={maxiIcon} style={styles.imageStyle}>
                            <Text>Maxi Dress</Text>
                        </Image>
                        <Image source={partyIcon} style={styles.imageStyle}>
                            <Text>Maxi Dress</Text>
                        </Image>
                    </Swiper>
                </View>
            </View>
        );
    }
}

const imageWidth = width - 40;
const imageHeight = imageWidth / 2;

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
        justifyContent: 'space-between',
    },

    textStyle: {
        fontSize: 20,
        color: '#afafaf',
    },

    imageStyle: {
        height: imageHeight,
        width: imageWidth,
        justifyContent: 'center',
        alignItems: 'center'
    },

    cateTitle: {
        fontSize: 20,
        fontFamily: 'Avenir',
        color: '#9a9a9a'

    }


});

Category.propTypes = {};
Category.defaultProps = {};

export default Category;
