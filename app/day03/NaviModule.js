/**
 * Created by YSD on 2017/4/18.
 */

import React, {Component}from 'react';
import {
    Navigator,
    BackAndroid
} from 'react-native';
import RegisterLeaf from './RegisterLeaf';
import WaitingLeaf from './WaitingLeaf';

export default class NaviModule extends Component {
    constructor(props) {
        super(props);
        this.handleBack = this.handleBack.bind(this);
    }

    //界面切换效果
    configureScene(route) {
        return Navigator.SceneConfigs.FadeAndroid;
    }

    renderScene(route, navigator) {
        console.log('renderScene');
        Navigator.navigator = navigator;
        switch (route.name) {
            case "register":
                return <RegisterLeaf navigator={navigator}/>;
            case "waiting":
                return <WaitingLeaf phoneNumber={route.phoneNumber}
                                    userPW={route.userPW}
                                    navigator={navigator}/>
        }
    }

    componentDidMount() {
        console.log("componentDidMount");
        BackAndroid.addEventListener('hardwareBackPress', this.handleBack);
    }

    handleBack() {
        const navigator = Navigator.navigator;
        console.log(navigator);
        if (navigator && navigator.getCurrentRoutes().length > 1) {
            navigator.pop();
            return true;
        }
        return false;
    }

    componentWillMount() {
        console.log("componentWillMount");
        BackAndroid.removeEventListener('hardwareBackPress', this.handleBack)
    }

    render() {
        return (<Navigator initialRoute={{name: 'register'}}
                           configureScene={this.configureScene}
                           renderScene={this.renderScene}/>);
    }


}