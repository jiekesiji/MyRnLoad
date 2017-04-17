/**
 * Created by hasee on 2017/4/17.
 */
import React, {
    Component
}from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput
} from 'react-native';

let dimensions = require('Dimensions');
let width = dimensions.get('window').width;
let leftStartPoint = width * 0.1;
let endPoint = width * 0.8;

export default class StatusDemo extends Component {

    // 构造
      constructor(props) {
        super(props);
        // 初始状态
        this.state = {
            inputedNum:'',
            inputedPw:''
        };
      }

    updataNum(newText){
          this.setState((state) =>{
              return{
                  inputedNum:newText
              }
          });
    }

    updataPw(newText){
        this.setState(()=>{
            return{
                inputedPw:newText
            }
        });
    }

    shouldComponentUpdate() {
        if(this.state.inputedNum.length < 4){
            return false;
        }else{
            return true;
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder={'请输入手机号'}
                           style={styles.textInput}
                           keyboardType={'phone-pad'}
                           onChangeText={(newText) => this.updataNum(newText)}>
                </TextInput>
                <Text style={ styles.textComm}>
                    您输入的手机号：{this.state.inputedNum}
                </Text>
                <TextInput
                    placeholder={'请输入密码'}
                    style={styles.textInput}
                ></TextInput>
                <Text
                    style={styles.buttonStyle}
                >
                    确定
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

    textInput: {
        top: 20,
        left: leftStartPoint,
        width: endPoint,
        backgroundColor: 'gray',
        fontSize: 20,
        height:50
    },

    textComm: {
        top: 20,
        left: leftStartPoint,
        width: endPoint,
        backgroundColor: 'red',
        fontSize: 15
    },
    buttonStyle: {
        left: leftStartPoint,
        top: 20,
        backgroundColor: 'yellow',
        fontSize: 15,
        width:endPoint,
        textAlign:'center'
    }


})