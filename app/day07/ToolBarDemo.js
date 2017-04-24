/**
 * Created by YSD on 2017/4/24.
 * desc：编写toolbar的使用的demo
 */
import React, {Component}from 'react';
import {
    View,
    ToolbarAndroid,
    StyleSheet
} from 'react-native';

var toolbarActions = [
    {title: 'weibo', icon: require('./../../image/close.png'), show: 'never'},
    {title: 'loonggg'},
    {title: 'blog', icon: require('./../../image/close.png'), show: 'never'},];
export default class ToolBarDemo extends Component {

    render() {
        return (
            <View style={styles.container}>
                <ToolbarAndroid
                    actions={toolbarActions}
                    style={styles.toolbar}
                    navIcon={require('./../../image/close.png')}
                    logo={require('./../../image/wheel.png')}
                    subtitle='子标题'
                    subtitleColor='#fff000'
                    titleColor='#0f0f0f'
                    title='主标题'/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green'
    },
    toolbar: {
        backgroundColor: '#c6c5b9',
        height: 60
    }
});
