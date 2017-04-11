/**
 * Created by YSD on 2017/4/11.
 */
import React ,{
    Component
}from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class RnHello extends Component{
    render(){
        return (
            <View style={styles.container} >
                <Text style={styles.welcome}>
                    Hello_World
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
        backgroundColor: '#FF963F',
    },
    welcome: {
        fontSize: 20,
        color:'#99ff00',
        textAlign: 'center',
        margin: 10,
    }

});