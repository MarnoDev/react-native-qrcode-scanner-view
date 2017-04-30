## 1.使用指南

- [**中文版**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README_CN.md)
- [**English Version**](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/README.md)

## 2.特性
- 支持扫描二维码、条形码
- 支持 Android 和 iOS 系统
- 基于 react-native-camera
- 轻松实现各类扫描界面

## 3.截图预览

|Twitter|WeChat|OFO|
|:--:|:--:|:--:|
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/twitter.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/wechat.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/ofo.png)|
|**QQBrowser**|**Gif1**|**Gif2**|
|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/qqbrowser.png)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo1.gif)|![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/demo2.gif)|


## 4.安装

```
//第一步
npm install ac-qrcode --save

//第二步（react-native-camera 需要 link 后才能使用）
react-native link

PS：如果 link 没有成功，会报错。如果没有自动 link，可以手动 link
```

## 5.基本使用

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
            >这里添加标题</Text>
        );
    }

    _renderMenu() {
        return (
            <Text
                style={{color:'white',textAlignVertical:'center', textAlign:'center',font:20,padding:12}}
            >这里添加底部菜单</Text>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}
```

## 6.属性列表

![](https://github.com/MarnoDev/AC-QRCode-RN/blob/master/screenshots/ac-qrcode-props.jpg)

|属性名|类型|默认值|可选|描述|
|:--:|:--:|:--:|:--:|:--:|
|maskColor|string|#0000004D|true|遮罩颜色|
|borderColor|string|#000000|true|边框颜色|
|cornerColor|string|#000000|true|转角颜色|
|borderWidth|number|0|true|边框宽度|
|cornerBorderWidth|number|4|true|转角宽度|
|cornerBorderLength|number|20|true|转角长度|
|rectHeight|number|200|true|扫描狂高度|
|rectWidth|number|200|true|扫描狂宽度|
|isCornerOffset|bool|false|true|转角是否偏移|
|cornerOffsetSize|number|0|true|转角偏移量|
|bottomMenuHeight|number|0|true|底部操作菜单高度|
|scanBarAnimateTime|number|2500|true|扫描线移动速度|
|scanBarColor|string|#22ff00|true|扫描线颜色|
|scanBarImage|any|null|true|使用图片扫描线|
|scanBarHeight|number|1.5|true|扫描线高度|
|scanBarMargin|number|6|true|扫描线距扫描狂边距|
|hintText|string|将二维码/条码放入框内，</br>即可自动扫描|true|提示文本|
|hintTextStyle|object|{ color: '#fff', </br>fontSize: 14,</br>backgroundColor:'transparent'}|true|提示文字样式|
|hintTextPosition|number|130|true|提示文字位置|
|isShowScanBar|bool|true|true|是否显示扫描条|
|bottomMenuStyle|object|-|true|底部菜单样式|
|renderTopBarView|func|-|flase|绘制顶部操作条组件|
|renderBottomMenuView|func|-|false|绘制底部操作条组件|
|onScanResultReceived|func|-|false|扫描结果回调|


## 7.待办

- [ ] 生成二维码
- [ ] 控制手电筒

## 8.感谢

- [react-native-camera](https://github.com/lwansbrough/react-native-camera)
- [react-native-qrcode-app](https://github.com/insiderdev/react-native-qrcode-app)
- [react-native-qrcode](https://github.com/cssivision/react-native-qrcode)

## 9.关于我

- 公众号：aMarno
- 网站：[www.marno.cn](http://www.marno.cn)
- 掘金：[www.juejin.im/user/marno](https://juejin.im/user/56c1c513c24aa800534e85f3)
- 简书：[www.jianshu.com/u/marno](http://www.jianshu.com/u/174a09ba6c25)
- 专题：[《React Native 开发阵营》](http://www.jianshu.com/c/b4ce1d706d1f)
