/**
 * Created by YSD on 2017/4/18.
 */


import React, {Component} from 'react';
import {
    View,
    StyleSheet,
    Text
} from  'react-native';

export default class WaitingLeaf extends Component {
    constructor(props) {
        super(props);
    }

    goback() {
        this.props.navigator.replace({
            name: "register"
        })
    }

    render() {
        return(
            <View style={styles.container}>
                <Text style={styles.textPromptStyle}>
                    注册使用的手机号:{this.props.phoneNumber}
                </Text>
                <Text style={styles.textPromptStyle}>
                    注册使用的密码:{this.props.userPW}
                </Text>
                <Text style={styles.bigTextPrompt}
                      onPress={this.goback()}>
                    返回
                </Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCAF'
    },
    textPromptStyle: {
        fontSize: 20
    },
    bigTextPrompt: {
        width: 300,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',
        fontSize: 60
    }

});