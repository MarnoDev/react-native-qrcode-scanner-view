/**
 * Created by marno on 2017/4/13
 * Function:
 * Desc:
 */
import React, {Component} from "react";
import {Text, View} from "react-native";
import Toast from 'react-native-simple-toast';
import {QRScannerView} from 'ac-qrcode';

import {ImageButton} from "../../components/";

import Styles from './styles/QQBrowserScreenStyles';
import {Images, Colors} from "../../resource/";

export default class QQBrowserScreen extends Component {
    render() {
        return (

            < QRScannerView
                isCornerOffset={true}
                cornerBorderLength={24}
                cornerBorderWidth={4}
                cornerOffsetSize={4}
                cornerColor={Colors.white_fff}
                rectWidth={280}
                rectHeight={280}
                borderWidth={2}
                borderColor={Colors.black_000}
                hintText={'对准二维码/条形码'}
                hintTextStyle={{color: Colors.white_fff, fontSize: 16,}}
                hintTextPosition={80}
                maskColor={Colors.black_00000080}
                bottomMenuHeight={100}
                bottomMenuStyle={{backgroundColor: '#000000B3', height: 100, justifyContent: 'center'}}
                scanBarColor={Colors.blue_4187E8}
                scanBarMargin={10}
                scanBarAnimateTime={3000}


                onScanResultReceived={this.barcodeReceived.bind(this)}

                renderTopBarView={() => {
                    return (
                        <View style={Styles.view_title_container}>
                            <ImageButton
                                onPress={() => this.props.navigation.goBack()}
                                source={Images.ic_qq_back}
                                style={{height: 32, width: 32, resizeMode: 'contain', marginLeft: 16}}
                            />
                            <Text
                                style={{color: Colors.blue_4187E8, fontSize: 18}}
                            >扫码</Text>
                            <Text
                                style={{color: 'white', fontSize: 18}}
                            >扫物</Text>
                            <Text
                                style={{color: 'white', fontSize: 18, marginRight: 80}}
                            >扫题</Text>
                        </View>
                    )
                }}

                renderBottomMenuView={() => {
                    return (
                        <View style={Styles.view_bottom_menu_container}>
                            <ImageButton
                                style={Styles.image_qqbrowser_light}
                                source={Images.ic_qrcode_light}
                            />
                            <Text
                                style={Styles.text_album}
                            >相册</Text>
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