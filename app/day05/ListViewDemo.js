/**
 * Created by hasee on 2017/4/20.
 */
import React, {
    Component
}from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    TouchableHighlight,
    Image
} from 'react-native';
export default class ListViewDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        const ds = new ListView.DataSource({rowHasChanged:(r1, r2) => r1 !== r2});

        // !== 和 != 不是一个概念
        // const ds = new ListView.dataSource({rowHasChanged:(r1, r2) => r1 != r2});
        // 初始状态
        this.state = {
            dataSource:ds.cloneWithRows(this._genRows(-1))
        };
      }

      render(){
          return(
              <ListView dataSource={this.state.dataSource}
                        renderRow={this._renderRow.bind(this)}/>
          )
      }

      _renderRow(rowData,sectionID,rowID){
          return(
              <TouchableHighlight onPress={()=>{
                  this._pressRow(rowData,rowID);}}
                                  underlayColor='red'>

              <View style={styles.row}>
                  <Image style={{width: 30,height: 30}} source={require('./../../image/photo.png')}/>
                  <Text style={{flex:1,fontSize: 20,marginLeft: 25}}>
                      {rowData}
                  </Text>
              </View>
              </TouchableHighlight>
          );
      }
    _pressRow(rowData,rowID){
        alert(rowData);
        this.setState({
            dataSource:this.state.dataSource.cloneWithRows(
                this._genRows(rowID)
            )
        });
    }

    _genRows(rowID){
        const dataBolb = [];
        for(let i = 0;i <50;i++){
            if(rowID == i){
                //数组对象添加元素用push
                dataBolb.push('我不太一样' + i );
            }else{
                dataBolb.push('我就是我');
            }
        }
        return dataBolb;
    }
    

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#F5FCFF'
    },
    row:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:'black'
    }
});