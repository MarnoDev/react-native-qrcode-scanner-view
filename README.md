## 1.Guide

- [**中文版**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README_CN.md)
- [**English Version**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README.md)

## 2.Features

- Can scan QR code,Bar code
- Support Android and iOS
- Base on react-native-camera
- Scanning interface can be customized

## 3.ScreenShots

|Twitter|WeChat|OFO|
|:--:|:--:|:--:|
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/twitter.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/wechat.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/ofo.png)|
|**QQBrowser**|**Gif1**|**Gif2**|
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/qqbrowser.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo1.gif)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo2.gif)|


## 4.Installation
```
// first step
npm install ac-qrcode --save

// second step
react-native link
```
## 5.Basic Usage
```
import { QRScannerView } from 'ac-qrcode';

export default class DefaultScreen extends Component {
    render() {
        return (

            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => this._renderTitleBar()}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderTitleBar(){
        return(
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is title bar</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >Here is bottom menu</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}
```
## 6.Props

![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/ac-qrcode-props.jpg)

|Prop|Type|Default|Optional|
|:--:|:--:|:--:|:--:|
|maskColor|string|#0000004D|true|
|borderColor|string|#000000|true|
|cornerColor|string|#000000|true|
|borderWidth|number|0|true|
|cornerBorderWidth|number|4|true|
|cornerBorderLength|number|20|true|
|rectHeight|number|200|true|
|rectWidth|number|200|true|
|isCornerOffset|bool|false|true|
|cornerOffsetSize|number|0|true|
|bottomMenuHeight|number|0|true|
|scanBarAnimateTime|number|2500|true|
|scanBarColor|string|#22ff00|true|
|scanBarImage|any|null|true|
|scanBarHeight|number|1.5|true|
|scanBarMargin|number|6|true|
|hintText|string|将二维码/条码放入框内，</br>即可自动扫描|true|
|hintTextStyle|object|{ color: '#fff', </br>fontSize: 14,</br>backgroundColor:'transparent'}|true|
|hintTextPosition|number|130|true|
|isShowScanBar|bool|true|true|
|bottomMenuStyle|object|-|true|
|renderTopBarView|func|-|flase|
|renderBottomMenuView|func|-|false|
|onScanResultReceived|func|-|false|

## 7.To Do

- [ ] Generate qr code
- [ ] Control flashlight

## 8.Thanks

- [react-native-camera](https://github.com/lwansbrough/react-native-camera)
- [react-native-qrcode](https://github.com/cssivision/react-native-qrcode)
- [react-native-qrcode-app](https://github.com/insiderdev/react-native-qrcode-app)

## 9.About Me

- 公众号：aMarno
- 网站：[www.marno.cn](http://www.marno.cn)
- 掘金：[www.juejin.im/user/marno](https://juejin.im/user/56c1c513c24aa800534e85f3)
- 简书：[www.jianshu.com/u/marno](http://www.jianshu.com/u/174a09ba6c25)
- 专题：[《React Native 开发阵营》](http://www.jianshu.com/c/b4ce1d706d1f)
