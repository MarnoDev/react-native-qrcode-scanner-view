## 1.Guide

- [**中文版**](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/README_CN.md)
- [**English Version**](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/README.md)

## 2.Features

- Can scan QR code,Bar code
- Support Android and iOS
- Base on react-native-camera
- Scanning interface can be customized

## 3.ScreenShots

|Twitter|WeChat|OFO|
|:--:|:--:|:--:|
|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/twitter.png)|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/wechat.png)|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/ofo.png)|
|**QQBrowser**|**Gif1**|**Gif2**|
|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/qqbrowser.png)|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/demo1.gif)|![](https://github.com/MarnoDev/AC-QRCodeScanner-RN/blob/master/screenshots/demo2.gif)||


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

export default class QQBrowserScreen extends Component {
    render() {
        return (
            < QRScannerView
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => {
                    return (
                        <View>
                          <Text}>这顶部标题栏</Text>
                        </View>
                    )
                }}

                renderBottomMenuView={() => {
                    return (
                        <View>
                            <Text>相册</Text>
                        </View>
                    )
                }}
            />
        )
    }

    barcodeReceived(e) {
        console.log(e)
    }
}
```
## 6.Props

|Prop|Type|Default|Optional|Description|
|:--:|:--:|:--:|:--:|:--:|
|maskColor|string|#0000004D|-|-|
|borderColor|string|#000000|-|-|
|cornerColor|string|#000000|-|-|
|borderWidth|number|0|-|-|
|cornerBorderWidth|number|4|-|-|
|cornerBorderLength|number|20|-|-|
|rectHeight|number|200|||
|rectWidth|number|200|||
|isCornerOffset|bool|false|||
|cornerOffsetSize|number|0|||
|bottomMenuHeight|number|100|||
|scanBarAnimateTime|number|2500|||
|scanBarColor|string|#22ff00|||
|scanBarImage|any|null|||
|scanBarHeight|number|1.5|||
|scanBarMargin|number|6|||
|hintText|string|将二维码/条码放入框内，</br>即可自动扫描|-|-|
|hintTextStyle|object|{color: '#fff', fontSize: 14}|-|-|
|hintTextPosition|number|130|-|-|
|renderTopBarView|func|-|-|-|
|renderBottomMenuView|func|-|-|-|
|isShowScanBar|bool|true|-|-|
|bottomMenuStyle|object|-|-|-|


## 6.To Do

- [ ] 生成二维码功能
- [ ] 解决重复扫码的问题
- [ ] 优化属性设置方式

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
