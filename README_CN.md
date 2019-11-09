# react-native-qrcode-scanner-view

可定制的二维码及条码扫码界面。该库的扫码功能依赖于 **[react-native-camera](https://github.com/react-native-community/react-native-camera)** 。所以理论上来说，如果 react-native-camera 没有提供的功能，这个库也提供不了。所以在开始使用该库之前，建议先按照 react-native-camera 使用说明将其配置好。

你也可以选择不使用本库提供的扫码功能(`QRScannerView`)，只使用扫码界面(`QRScannerRectView`)，具体使用方法，可以查看源码中导出的两个组件。

-----

## 指南

- [**中文说明**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README_CN.md)
- [**English Version**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README.md)

## 特性

- 纯 JS 代码
- 支持 Android 和 iOS 系统
- 支持 React Native 0.60+
- 支持条码和二维码
- 高度可定制的扫描界面，快速实现各种效果

## 截图

| **Default**  | **WeChat** |  **MeiTuan**  |
| :----------: | :--------: | :-----------: |
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/default.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/wechat.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/meituan.png)|
| **TikTok**  | **DemoHome** | **Demo Gif** |
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/tiktok.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/video.gif)|

## 安装

```JavaSCript
// 第一步
配置好 react-native-camera

// 第二步（安装本库）
yarn add react-native-qrcode-scanner-view

// 或

npm install react-native-qrcode-scanner-view --save
```

## 基本

```JavaScript
import { View } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-sanner-view';

export default class DefaultScreen extends Component {

    renderTitleBar = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Title</Text>

    renderMenu = () => <Text style={{color:'white',textAlign:'center',padding:16}}>Menu</Text>

    barcodeReceived = (event) => { console.log('Type: ' + event.type + '\nData: ' + event.data) };

    render() {
        return (
           <View style={{flex:1}}>
            < QRScannerView
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                scanBarAnimateReverse={ true }/>
           </View>
        )
    }
}
```

## 属性

![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/props.png)

|        属性名         |  类型  |                                              默认值                                              | 可选  |        描述        |
| :-------------------: | :----: | :----------------------------------------------------------------------------------------------: | :---: | :----------------: |
|       maskColor       | string |                                            #0000004D                                             | true  |      遮罩颜色      |
|       rectStyle       | object | height: 300, <br>width: 300, <br>borderWidth: 0, <br>borderColor: '#000000', <br>marginBottom: 0 | true  |     扫描框样式     |
|      cornerStyle      | object |            height: 32, <br>width: 32, <br>borderWidth: 6, <br>borderColor: '#1A6DD5'             | true  |      转角样式      |
|   cornerOffsetSize    | number |                                                0                                                 | true  |     转角偏移量     |
|     isShowCorner      |  bool  |                                               true                                               | true  |    转角是否显示    |
|     scanBarStyle      | object |             marginHorizontal: 8, <br>borderRadius: 2, <br>backgroundColor: '#1A6DD5'             | true  |     扫描线样式     |
|     isShowScanBar     |  bool  |                                               true                                               | true  |   是否显示扫描条   |
|  scanBarAnimateTime   | number |                                               3000                                               | true  |   扫描线动画时长   |
| scanBarAnimateReverse |  bool  |                                              false                                               | true  |   扫描线动画反向   |
|     scanBarImage      |  any   |                                                                                                  | true  |   使用图片扫描线   |
|       hintText        | string |                                                                                                  | true  |      提示文本      |
|     hintTextStyle     | object |      color: '#fff', <br>fontSize: 14, <br>backgroundColor: 'transparent', <br>marginTop: 32      | true  |    提示文字样式    |
|   renderHeaderView    |  func  |                                                -                                                 | true  | 绘制顶部操作条组件 |
|   renderFooterView    |  func  |                                                -                                                 | true  | 绘制底部操作条组件 |
|     onScanResult      |  func  |                                                -                                                 | false |    扫描结果回调    |
|     scanInterval      | number |                                               2000                                               | true  |  扫描结果回调间隔  |
|        torchOn        |  bool  |                                              false                                               | true  |   是否开启闪光灯   |
|       userFront       |  bool  |                                              false                                               | true  | 是否使用前置摄像头 |

## 关于

- **公众号:** Marno
- **网站:** [www.marno.cn](http://www.marno.cn)
- **掘金:** [www.juejin.im/user/marno](https://juejin.im/user/56c1c513c24aa800534e85f3)
