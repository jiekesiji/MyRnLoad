/**
 * Created by hasee on 2017/4/23.
 * des:一个listview和refreshControl结合使用的例子
 */
import React, {
    Component
}from 'react';
import {
    View,
    Text,
    StyleSheet,
    ListView,
    RefreshControl,
    TouchableHighlight
} from 'react-native';

export default class RefreshDemo extends Component{
    // 构造
      constructor(props) {
        super(props);
        //初始化一个listview数据源
          const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=> r1 !== r2});
        // 初始状态
        this.state = {
            isRefreshing:false,
            dataSource:ds.cloneWithProps(this._genRows(-1)),
        };
      }

      _genRows(flag){
          const dataBolb = [];
          for(let i =0;i<50;i++){
              if( i == flag){
                  dataBolb.push('我被点击了' + i);
              }else{
                  dataBolb.push('我没有被点击');
              }
          }
          return dataBolb;
      }

      _renderRow(rowData,rowID,selectID){
          return(
              <TouchableHighlight
                  onPress={() => {
                      this._pressRow(rowData,rowID);
                  }}
                  underlayColor='red'>

                  <View style={styles.item}>
                     <Image style={{width:40,height: 40}} source={require('./../../image/colck.png')}/>
                      <Text style={{flex:1,fontSize: 20,marginLeft: 20}}>
                          {rowData}
                      </Text>
                  </View>
              </TouchableHighlight>
          );
      }

    _onRefresh(){
        this.setState({isRefreshing:true});
        setTimeout
    }

    render() {
        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this._renderRow.bind(this)}
                refreshControl = {
                    <RefreshControl
                         refreshing={this.state.isRefreshing}
                         onRefresh={this._onRefresh.bind(this)}
                         tintColor= "#ff0000"
                         colors={['#ff0000','#00ff00','#0000ff']}
                         progressBackgroundColor='#ffff00'
                         enabled={true}
                    />
                }
            />
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
        justifyContent:'center',
        alignItems:'center',
    },
    item:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:10
    },

});
