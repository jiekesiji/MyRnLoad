/**
 * Created by YSD on 2017/4/24.
 * desc:编写switch(开关控件)和ActivityIndicator（相当与android原生的progressbar）的使用demo
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Switch,
    View,
    ActivityIndicator
} from 'react-native';

export default class SwitchDemo extends Component {
    state = {
        colorTrueSwitchIsOn:true,
        colorFalseSwitchIsOn:false
    }
    render() {
        return (
            <View style={styles.container}>
                <Switch
                    onValueChange={(value)=>this.setState({colorFalseSwitchIsOn:value})}
                    style={{marginBottom:10}}
                    value={this.state.colorFalseSwitchIsOn}
                />

                <ActivityIndicator
                    size='large'
                    color='red'
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchStyle: {}
});