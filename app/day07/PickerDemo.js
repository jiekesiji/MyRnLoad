/**
 * Created by YSD on 2017/4/24.
 * desc:一个关于picker的使用的一个demo
 */

import React, {Component} from 'react';
import {
    Text,
    Picker,
    View,
    StyleSheet
} from 'react-native';

export default class PickerDemo extends Component {

    state = {
        defaultPos: 1,
        dropMode:'',
    }

    render() {
        return (
            <View style={styles.container}>
                <Picker
                    selectedValue={this.state.defaultPos}
                    mode={'dropdown'}
                    style={styles.pickerStyle}
                    prompt={'我是小标题'}
                    onValueChange={(value) => this.onValueChange(1,value)}>
                    <Picker.Item label='我是下拉菜单01' value='key01'/>
                    <Picker.Item label='我是下拉菜单02' value='key02'/>
                    <Picker.Item label='我是下拉菜单03' value='key03'/>
                    <Picker.Item label='我是下拉菜单04' value='key04'/>
                </Picker>
            </View>
        )
    }

    onValueChange = (flag,value)=>{
        this.setState({defaultPos:value});
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    pickerStyle: {
        width: 200
    }
});