/**
 * Created by YSD on 2017/4/20.
 */

import React, {Component}from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    ScrollView,
    TouchableNativeFeedback
} from 'react-native';

export default class ScrollViewDemo extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_view}>
                    <Text style={{color:'white',fontSize:20}}>空间动态</Text>
                </View>

                <ScrollView style={{showsVerticalScrollIndicator:false}}>
                    <View style={styles.third_image_title}>
                        <View style={styles.title_view_vertical}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.title_text}>定时</Text>
                        </View>
                        <View style={styles.title_view_vertical}>
                            <Image source={require('./../../image/photo.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.title_text}>相册</Text>
                        </View>
                        <View style={styles.title_view_vertical}>
                            <Image source={require('./../../image/wheel.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.title_text}>设置</Text>
                        </View>
                    </View>
                    <View style={{height:30,backgroundColor:'#f9f9fb'}}/>

                    <TouchableNativeFeedback>
                        <View style={styles.rectangle_view}>
                            <View style={{flexDirection:'row',alignItems:'center'}}>
                                <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                                <Text style={styles.rectangle_text}> 定时起床</Text>
                            </View>
                            <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                        </View>
                    </TouchableNativeFeedback>


                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                    <View style={styles.rectangle_view}>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center',width:30,height:30}}/>
                            <Text style={styles.rectangle_text}> 定时起床</Text>
                        </View>
                        <Image source={require('./../../image/close.png')} style={{alignSelf:'center',width:20,height:20}}/>
                    </View>

                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title_view: {
        flexDirection: 'row',
        backgroundColor: '#27b5ee',
        justifyContent: 'center',
        height: 50,
        alignItems: 'center'
    },
    third_image_title:{
        paddingTop:15,
        justifyContent:"space-around",
        alignItems:'center',
        flexDirection:'row',
        backgroundColor:'white'
    },
    title_view_vertical:{
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'white',
        paddingBottom:15
    },
    title_text:{
        marginTop:8,
        color:'black',
        fontSize:14
    },
    rectangle_view:{
        paddingTop:8,
        paddingBottom:8,
        paddingLeft:15,
        paddingRight:15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        borderBottomColor:'#dedfe0',
        borderBottomWidth:1
    },
    rectangle_text:{
        color:'black',
        fontSize:18,
        textAlign:'center',
        paddingLeft:8
    }


});