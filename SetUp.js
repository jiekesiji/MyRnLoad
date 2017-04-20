/**
 * 例子程序
 */

import React from 'react';
import {AppRegistry} from 'react-native';

/**
 * 导入相关的类
 */
// import RnHello from './app/day01/RnHello';
// import FlexDemo from './app/day01/flexdemo';

// import StatusDemo from './app/day02/StatusDemo';
// import NaviModule from './app/day03/NaviModule';
// import TextInputDemo from './app/day04/TextInputDemo';
// import ImageDemo from './app/day04/ImageDemo';
import ScrollViewDemo from './app/day05/ScrollViewDemo';


/**
 * 注册
 */
// AppRegistry.registerComponent('MyRnLoad',()=>FlexDemo);

AppRegistry.registerComponent('MyRnLoad', () => ScrollViewDemo);