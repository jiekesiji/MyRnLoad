/**
 * Created by YSD on 2017/4/11.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class FelxDemo extends Component{
    render() {
        return (
            <View style={FlexDiceTestStyle.container}>
                <Text style={FlexDiceTestStyle.item1}>1</Text>
                <Text style={FlexDiceTestStyle.item2}>2</Text>
                <Text style={FlexDiceTestStyle.item3}>3</Text>
                <Text style={FlexDiceTestStyle.item4}>4</Text>
                <Text style={FlexDiceTestStyle.item5}>5</Text>
                <Text style={FlexDiceTestStyle.item6}>6</Text>
                <Text style={FlexDiceTestStyle.item7}>7</Text>
                <Text style={FlexDiceTestStyle.item8}>8</Text>
                <Text style={FlexDiceTestStyle.item9}>9</Text>
            </View>
        )
    }
}

const FlexDiceTestStyle = StyleSheet.create({
    container: {
        backgroundColor: "yellow",
        flexDirection:'row',
        flexWrap:'wrap',
        borderBottomColor:'black',
        borderWidth:1
    },
    item1: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item2: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        alignItems:'center',
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item3: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item4: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4
    },
    item5: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item6: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item7: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item8: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    },
    item9: {
        color: "#fff",
        backgroundColor: "#000",
        height: 80,
        width: 80,
        textAlign: "center",
        textAlignVertical: "center",
        margin: 4,
    }
})



