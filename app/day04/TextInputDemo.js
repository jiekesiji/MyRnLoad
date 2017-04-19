/**
 * Created by hasee on 2017/4/19.
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

export default class TextInputDemo extends Component{
    render(){
        return (
        <View style = {styles.container}>
            <View style = {styles.text_title_container}>
                <Text style = {styles.text_title}>注册邮箱</Text>
            </View>

            <TextInput placeholder='输入用户名'
                       style={styles.text_input}
                       numberOfLines={1}
                       autoFocus={false}
                       underlineColorAndroid={'#e1e1e1'}/>

            <TextInput placeholder='请输入密码'
                       style={styles.text_input}
                       numberOfLines={1}
                       autoFocus={false}
                       underlineColorAndroid={'#e1e1e1'}/>


            <View style={{backgroundColor:'#ffffff',flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
                    <View style={styles.view_register}>
                        <Text style={{color:'black'}}> 注册</Text>
                    </View>
                <View style={styles.view_login}>
                    <Text style={{color:'white'}}> 登录</Text>
                </View>
            </View>

            <Text style={styles.bottom_text}>
                忘记密码?
            </Text>
            <View style={styles.half_view}></View>
        </View>
        )
    }
}


const styles = StyleSheet.create({

    container:{
        flex:1,
        backgroundColor:'white'
    },
    text_title_container:{
        flexDirection:'row',
        backgroundColor:'#27b5ee',
        alignItems:'center',
        height:50
    },
    text_title:{
        color:'white',
        fontSize:22,
        marginLeft:20,
        textAlign:'center'
    },
    text_input:{
        backgroundColor:'#fff',
        marginTop:5,
        marginLeft:26,
        marginRight:26,
        textAlign:'left'
    },
    view_register:{
        flex:1,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderColor:'#5ac4ef',
        borderWidth: 1,
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    view_login:{
        flex:1,
        marginTop:20,
        marginLeft:20,
        marginRight:20,
        borderColor:'#5ac4ef',
        borderWidth: 1,
        height:35,
        borderRadius:5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'#27b5ee'
    },
    bottom_text:{
        color:'#27b5ee',
        fontSize:14,
        marginTop:10,
        marginLeft:20,
        marginBottom: 20,
        textAlign:'left',
        fontWeight:'bold'
    },
    half_view:{
        flex:1,
        backgroundColor:'#eeeeee'
    }


});
