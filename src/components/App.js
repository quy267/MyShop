/**
 * Created by MyPC on 20/04/2017.
 */

import React, {Component, PropTypes,} from 'react';
import {Text, View, Navigator} from "react-native";
import Authentication from './authentication/Authentication';
import ChangeInfo from './changeinfo/ChangeInfo';
import OrderHistory from './orderhistory/OrderHistory';
import Main from './main/Main';

class App extends Component {
    render() {
        return (
            <Navigator
                initialRoute={{name: "MAIN"}}
                renderScene={(route, navigator) => {
                    switch (route.name) {
                        case "MAIN":
                            return <Main navigator={navigator}/>;
                        case  "CHANGE_INFO":
                            return <ChangeInfo navigator={navigator}/>;
                        case "AUTHENTICATION":
                            return <Authentication navigator={navigator}/>;
                        default:
                            return <OrderHistory navigator={navigator}/>;
                    }
                }}
                configureScene={(route) => {
                    switch (route.name) {
                        case "AUTHENTICATION":
                            return Navigator.SceneConfigs.FloatFromRight;
                        default:
                            return Navigator.SceneConfigs.FloatFromLeft;
                    }
                }}
            />
        );
    }
}

App.propTypes = {};
App.defaultProps = {};

export default App;

