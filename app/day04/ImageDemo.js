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
    Image
} from 'react-native';

export default class ImageDemo extends Component {


    render() {
        return (
            <View style={styles.container}>
                <View style={styles.title_container}>
                    <Text style={styles.title_text}>空间动态</Text>
                </View>

                <View style={styles.three_image_container}>
                    <View style={styles.vertical_view}>
                        <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center', width: 30, height: 30}}/>
                        <Text style={styles.top_text}>时钟</Text>
                    </View>
                    <View style={styles.vertical_view}>
                        <Image source={require('./../../image/photo.png')} style={{alignSelf: 'center', width: 30, height: 30}}/>
                        <Text style={styles.top_text}>照片</Text>
                    </View>
                    <View style={styles.vertical_view}>
                        <Image source={require('./../../image/wheel.png')} style={{alignSelf: 'center', width: 30, height: 30}}/>
                        <Text style={styles.top_text}>设置</Text>
                    </View>
                </View>

                <View style={{height: 30, backgroundColor: '#f9f9fb'}}></View>

                <View style={styles.rectangle_view}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('./../../image/colck.png')} style={{alignSelf: 'center', width: 25, height: 25}}/>
                        <Text style={styles.rectangle_text}>
                            羽毛球
                        </Text>
                    </View>
                    <Image source={require("./../../image/close.png")} style={{alignSelf:'center',width:20,height:20}}/>
                </View>

                <View style={styles.rectangle_view}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('./../../image/photo.png')} style={{alignSelf: 'center', width: 25, height: 25}}/>
                        <Text style={styles.rectangle_text}>
                            篮    球
                        </Text>
                    </View>
                    <Image source={require('./../../image/close.png')} style={{width:20,height:20,alignSelf:'center'}}/>
                </View>

                <View style={styles.rectangle_view}>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Image source={require('./../../image/wheel.png')} style={{alignSelf: 'center', width: 25, height: 25}}/>
                        <Text style={styles.rectangle_text}>
                            羽毛球
                        </Text>
                    </View>
                    <Image source={require('./../../image/close.png')} style={{width:20,height:20,alignSelf:'center'}}/>
                </View>

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    title_container: {
        flexDirection: 'row',
        backgroundColor: '#27b5ee',
        alignItems: 'center',
        height: 50,
        justifyContent:'center'
    },
    title_text: {
        color: 'white',
        fontSize: 22
    },
    three_image_container: {
        flexDirection: 'row',
        backgroundColor: 'white',
        paddingTop: 15,
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    vertical_view: {
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        paddingBottom: 15,
    },
    top_text: {
        marginTop: 5,
        color: 'black',
        fontSize: 16,
        textAlign: 'center'
    },
    rectangle_view: {
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 15,
        paddingRight: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white',
        borderBottomColor: '#dedfe0',
        borderBottomWidth: 1,
    },
    rectangle_text: {
        color: 'black',
        fontSize: 16,
        textAlign: 'center',
        paddingLeft: 8,
    },

});