/**
 * Created by YSD on 2017/4/24.
 * desc：viewpagerandroid的使用和原生的viewpager的使用效果类似
 *
 */

import React, {Component} from 'react';
import {
    View,
    ViewPagerAndroid,
    Image,
    Text,
    StyleSheet,
    TouchableOpacity
} from 'react-native';

var PAGES = 3;
var IMAGE_URLS = [
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493025381598&di=5c686995d582e5c498e1db3f7542437d&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F282%2F12%2F47798IWRA4T4.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493025381598&di=c65a0d9be2ff9837b841a779b8c2d021&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F282%2F13%2FY1Q70L2P0MN7.jpg',
    'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1493025381750&di=3bb65ab218b54080311ace70371abd5e&imgtype=0&src=http%3A%2F%2Fimage.tianjimedia.com%2FuploadImages%2F2015%2F159%2F45%2FA8F7KC7N7BKD.jpg'
];

export default class ViewPagerDemo extends Component {

    state = {
        page: 0
    }

    render() {
        var pages = [];
        for (let i = 0; i < PAGES; i++) {
            pages.push(
                <View key={i} collapsable={false}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={this.onPress}>
                        <Image style={styles.imageStyle}
                               source={{uri: IMAGE_URLS[i]}}/>
                    </TouchableOpacity>
                </View>
            );
        }
        return (
            <View style={styles.container}>
                <ViewPagerAndroid initialPage={0}
                                  style={styles.viewpagerStyle}
                                  onPageSelected={this.onPageSelected}>
                    {pages}
                </ViewPagerAndroid>

                <Text style={{flex: 1, alignSelf: 'center'}}>当前第{this.state.page + 1}页</Text>
            </View>

        )
    }

    onPageSelected = (e) => {
        this.setState({page: e.nativeEvent.position});
    }

    onPress = () => {
        alert('第' + (this.state.page + 1) + '页被点击了');
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    viewpagerStyle: {
        height: 220,
        flex: 1
    },
    imageStyle: {
        height: 220,
        padding: 20
    }
});