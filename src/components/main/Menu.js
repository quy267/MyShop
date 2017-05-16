/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Image} from "react-native";
import profileIcon from '../../media/temp/profile.png';

class Menu extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {isLoggedIn: false}
    }


    goToAuthentication() {
        const navigator = this.props.navigator;
        navigator.push({name: "AUTHENTICATION"});
    }

    goToChangeInfo() {
        const navigator = this.props.navigator;
        navigator.push({name: "CHANGE_INFO"});
    }

    goToOrderHistory() {
        const navigator = this.props.navigator;
        navigator.push({name: "ORDER_HISTORY"});
    }

    render() {
        const {container, profile, btnStyle, btnText, btnSignInStyle, btnTextSignIn} = styles;
        const logoutJSX = (
            <View>
                <TouchableOpacity style={btnStyle}>
                    <Text style={btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );
        const loginJSX = (
            <View style={styles.loginContainer}>
                <Text style={styles.username}>Nguyen Van Pho</Text>
                <View style={{paddingBottom: 120}}>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn}>Order History</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn}>Change Info</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={btnSignInStyle}>
                        <Text style={btnTextSignIn}>Sign out</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );

        const mainJSX = this.state.isLoggedIn ? loginJSX : logoutJSX;
        return (
            <View style={container}>
                <Image source={profileIcon} style={profile}/>
                {mainJSX}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#34b089',
        borderRightWidth: 3,
        borderColor: '#fff',
        alignItems: 'center',
    },

    profile: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginVertical: 30
    },

    btnStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        paddingHorizontal: 70
    },

    btnText: {
        color: '#34b089',
        fontSize: 20,
    },

    btnSignInStyle: {
        height: 50,
        backgroundColor: '#fff',
        justifyContent: 'center',
        borderRadius: 5,
        width: 200,
        marginBottom: 10,
        paddingLeft: 10

    },

    btnTextSignIn: {
        color: '#34b089',
        fontSize: 15,

    },

    loginContainer: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    username: {
        color: '#fff', fontFamily: 'Avenir', fontSize: 20
    }

});

Menu.propTypes = {};
Menu.defaultProps = {};

export default Menu;

