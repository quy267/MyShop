/**
 * Created by MyPC on 12/05/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, TouchableOpacity, View, Dimensions, Image, TextInput, StyleSheet} from "react-native";

import icLogo from '../../../media/appIcon/ic_logo.png';
import icMenu from '../../../media/appIcon/ic_menu.png';


const {height} = Dimensions.get('window');

class Header extends Component {

    constructor(props, context) {
        super(props, context);
    }


    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={styles.iconStyle}/>
                    </TouchableOpacity>
                    <Text style={styles.titleStyle}>Wearing a Dress</Text>
                    <Image source={icLogo} style={styles.iconStyle}/>
                </View>
                <TextInput style={styles.textInput} underlineColorAndroid={'#fff'}
                           placeholder={"What do you want to buy?"}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height: height / 8,
        backgroundColor: '#34b089',
        padding: 10,
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textInput: {
        height: height / 23,
        backgroundColor: '#fff',
        paddingLeft: 10,
        paddingBottom: 5,
        fontSize:15
    },
    iconStyle: {
        width: 25,
        height: 25
    },
    titleStyle: {
        color: '#fff',
        fontSize: 20,
        fontFamily: 'Avenir'
    }

});

Header.propTypes = {};
Header.defaultProps = {};

export default Header;

