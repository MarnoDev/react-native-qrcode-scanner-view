# react-native-qrcode-scanner-view

A highly customized qrcode viewfinder base on **[react-native-camera](https://github.com/react-native-community/react-native-camera)**. You must set up react-native-camera correctly first before use it.If you need to set more react-native-camera props, you can just use Viewfinder which is exported as QRScannerRectView. Please view source code to learn more.

----

## Guide

- [**中文版**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README_CN.md)
- [**English Version**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README.md)

## Features

- Pure JS code
- Support Android and iOS
- Support React Native 0.60+
- Support scan QR code, Bar code
- Scanning interface can be customized

## ScreenShots

| **Default**  | **WeChat** |  **MeiTuan**  |
| :----------: | :--------: | :-----------: |
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/default.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/wechat.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/meituan.png)|
| **TikTok**  | **DemoHome** | **Demo Gif** |
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/tiktok.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/video.gif)|

## Installation

```JavaSCript
// First
set up react-native-camera

// Second
yarn add react-native-qrcode-scanner-view

// or

npm install react-native-qrcode-scanner-view --save
```

## Basic

```JavaScript
import { View } from 'react-native';
import { QRScannerView } from 'react-native-qrcode-scanner-view';

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

## Props

![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/props.png)

|Prop|Type|Default|Optional|
| :-------------------: | :----: | :----------------------------------------------------------------------------------------------: | :---: |
|       maskColor       | string |                                            #0000004D                                             | true  |
|       rectStyle       | object | height: 300, <br>width: 300, <br>borderWidth: 0, <br>borderColor: '#000000', <br>marginBottom: 0 | true  |
|      cornerStyle      | object |            height: 32, <br>width: 32, <br>borderWidth: 6, <br>borderColor: '#1A6DD5'             | true  |
|   cornerOffsetSize    | number |                                                0                                                 | true  |
|     isShowCorner      |  bool  |                                               true                                               | true  |
|     scanBarStyle      | object |             marginHorizontal: 8, <br>borderRadius: 2, <br>backgroundColor: '#1A6DD5'             | true  |
|     isShowScanBar     |  bool  |                                               true                                               | true  |
|  scanBarAnimateTime   | number |                                               3000                                               | true  |
| scanBarAnimateReverse |  bool  |                                              false                                               | true  |
|     scanBarImage      |  any   |                                                                                                  | true  |
|       hintText        | string |                                                                                                  | true  |
|     hintTextStyle     | object |      color: '#fff', <br>fontSize: 14, <br>backgroundColor: 'transparent', <br>marginTop: 32      | true  |
|   renderHeaderView    |  func  |                                                -                                                 | true  |
|   renderFooterView    |  func  |                                                -                                                 | true  |
|     onScanResult      |  func  |                                                -                                                 | false |
|     scanInterval      | number |                                               2000                                               | true  |
|        torchOn        |  bool  |                                              false                                               | true  |
|       userFront       |  bool  |                                              false                                               | true  |

## About

- **公众号:** Marno
- **网站:** [www.marno.cn](http://www.marno.cn)
- **掘金:** [www.juejin.im/user/marno](https://juejin.im/user/56c1c513c24aa800534e85f3)
