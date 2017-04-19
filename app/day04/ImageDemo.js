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
    ImageView
} from 'react-native';

export default class ImageDemo extends Component{


    render(){
        return(
            <View style={styles.container}>
                {/*<View style={styles.title_container}>*/}
                    {/*<Text style={styles.title_text}>空间动态</Text>*/}
                {/*</View>*/}

                // <View style={styles.three_image_container}>
                    {/*<ImageView source={require('./colck.png')} style={{alignSelf:'center',width:30,height:30}}>*/}
                    {/*</ImageView>*/}
                    {/*<Text style={styles.vertical_view}>时钟</Text>*/}
                {/*</View>*/}

            </View>
        )
    }

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    },
    title_container:{
        flexDirection:'row',
        backgroundColor:'#27b5ee',
        alignItems:'center',
        height:50,
        justifyContent:'center'
    },
    title_text:{
        color:'white',
        fontSize:22
    },
    three_image_container:{
        flexDirection:'row',
        backgroundColor:'white',
        paddingTop:15,
        alignItems:'center',
        justifyContent:'space-around'
    },
    vertical_view:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:'white',
        paddingBottom:15,
    }
});