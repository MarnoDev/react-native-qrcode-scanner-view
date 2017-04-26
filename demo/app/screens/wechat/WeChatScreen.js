/**
 * Created by marno on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {Text, View} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from 'ac-qrcode';

import {ImageButton, TitleBar} from "../../components/";

import Styles from './styles/WeChatScreenStyles';
import {Constants, Images, Colors} from "../../resource/";

export default class WeChatScreen extends Component {
    render() {
        return (

            < QRScannerView
                bottomMenuStyle={{height: 100, backgroundColor: Colors.black_393A3F, opacity: 1}}
                hintTextPosition={120}
                hintTextStyle={{color:Colors.gray_C0C0C0}}
                maskColor={Colors.black_0000004D}
                borderWidth={0}
                iscorneroffset={false}
                cornerOffsetSize={0}
                scanBarAnimateTime={3000}
                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => {
                    return (
                        <TitleBar
                            titleColor={Colors.white_fff}
                            bgColor={Colors.black_393A3F}
                            title={Constants.string_title_wechat_scanner}
                            rightIcon={Images.ic_wechat_more}
                            leftIcon={Images.ic_wechat_back}
                            leftIconPress={() => this.props.navigation.goBack()}
                        />

                    )
                }}

                renderBottomMenuView={() => {
                    return (
                        <View style={{flexDirection:'row',justifyContent:'space-around'}}>
                            <View style={Styles.view_bottom_menu_item}>
                                <ImageButton
                                    style={Styles.image_bottom_menu}
                                    source={Images.ic_wechat_scan_hl}
                                />
                                <Text
                                    style={Styles.text_bottom_menu_item}
                                >扫码</Text>
                            </View>

                            <View style={Styles.view_bottom_menu_item}>
                                <ImageButton
                                    style={Styles.image_bottom_menu}
                                    source={Images.ic_wechat_scan_book}
                                />
                                <Text
                                    style={Styles.text_bottom_menu_item}
                                >封面</Text>
                            </View>


                            <View style={Styles.view_bottom_menu_item}>
                                <ImageButton
                                    style={Styles.image_bottom_menu}
                                    source={Images.ic_wechat_scan_street}
                                />
                                <Text
                                    style={Styles.text_bottom_menu_item}
                                >街景</Text>
                            </View>


                            <View style={Styles.view_bottom_menu_item}>
                                <ImageButton
                                    style={Styles.image_bottom_menu}
                                    source={Images.ic_wechat_scan_word}
                                />
                                <Text
                                    style={Styles.text_bottom_menu_item}
                                >翻译</Text>
                            </View>

                        </View>
                    )
                }}
            />
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}