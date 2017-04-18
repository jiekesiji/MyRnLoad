/**
 * Created by YSD on 2017/4/18.
 */
import React, {Component}from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput
} from 'react-native';

// let dimensions = require('Dimensions');
// let totalWith = dimensions.get('window').width;
// let leftStartPoint = totalWith * 0.1;
// let componentWidth = totalWidth * 0.8;

export default class RegisterLeaf extends Component {
    constructor(props) {
        super(props);
        this.state = {
            inputedNum: '',
            inputedPw: ''
        };
    }

    updateNum(newText) {
        this.setState((state) => {
            return {
                inputedNum: newText
            }
        });
    }

    updatePW(newText) {
        this.setState(
            (state) => {
                return {inputedPw: newText}
            });
    }

    userPressConfirm() {
        console.log("userPressConfirm");
        this.props.navigator.push({
            phoneNumber: this.state.inputedNum,
            userPW: this.state.inputedPw,
            name: 'waiting'
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={styles.numberInputStyle}
                    keyboardType={'phone-pad'}
                    placeholder={'请输入手机号'}
                    onchangetext={(newText) => this.updateNum(newText)}/>

                <Text style={styles.textPromptStyle}>
                    请输入手机号：{this.state.inputedNum}
                </Text>

                <TextInput style={styles.numberInputStyle}
                           placeholder={'输入密码'}
                           onChangeText={(newText) => this.updatePW(newText)}/>

                <Text style={styles.bigTextPrompt}
                      onPress={this.userPressConfirm()}>
                    注册
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    numberInputStyle: {
        top: 20,     // top left表示从父组件的顶端(左侧) 向下(向右) 多少位置显示
        left: 20,
        // height:30,  // IOS开发需要加上该高度
        width: 480,
        backgroundColor: 'gray',
        fontSize: 20
    },
    textPromptStyle: {
        top: 30,
        left: 20,
        //  // height:30,  // IOS开发需要加上该高度 因为IOS中TextInput不会自动设置高度
        width: 480,
        fontSize: 20
    },
    passwordInputStyle: {
        top: 50,
        left: 20,
        width: 480,
        backgroundColor: 'gray',
        fontSize: 20
    },
    bigTextPrompt: {
        top: 70,
        left: 20,
        width: 480,
        backgroundColor: 'gray',
        color: 'white',
        textAlign: 'center',//位置居中显示
        fontSize: 60
    }
});