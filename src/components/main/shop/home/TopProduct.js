/**
 * Created by MyPC on 15/05/2017.
 */

import React, {
    Component,
    PropTypes,
} from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from "react-native";
import sp1 from '../../../../media/temp/sp1.jpeg';
import sp2 from '../../../../media/temp/sp2.jpeg';
import sp3 from '../../../../media/temp/sp3.jpeg';
import sp4 from '../../../../media/temp/sp4.jpeg';


class TopProduct extends Component {
    render() {
        const {container, titleContainer, title, body, productContainer, productImage, productName, productPrice} = styles;
        return (
            <View style={container}>
                <View style={titleContainer}>
                    <Text style={title}>TOP PRODUCT</Text>
                </View>
                <View style={body}>
                    <View style={productContainer}>
                        <Image source={sp1} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp2} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </View>
                    <View style={{height: 10, width: width,}}/>
                    <View style={productContainer}>
                        <Image source={sp3} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>400$</Text>
                    </View>
                    <View style={productContainer}>
                        <Image source={sp4} style={productImage}/>
                        <Text style={productName}>PRODUCT NAME</Text>
                        <Text style={productPrice}>250$</Text>
                    </View>
                </View>
            </View>
        );
    }
}

const {width,height} = Dimensions.get('window');
const productWidth = (width - 60) / 2;
const productImageHeight = (productWidth / 361) * 452;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        color: '#d3d3cf',
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        paddingBottom: 10,
    },
    productContainer: {
        width: productWidth,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
    },
    productImage: {
        width: productWidth,
        height: productImageHeight
    },
    productName: {
        marginVertical: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#d3d3d3',
        fontWeight: '500'
    },
    productPrice: {
        marginBottom: 5,
        paddingLeft: 10,
        fontFamily: 'Avenir',
        color: '#662f90',
    }


});

TopProduct.propTypes = {};
TopProduct.defaultProps = {};

export default TopProduct;

