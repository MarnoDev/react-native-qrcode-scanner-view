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

import Styles from './styles/OFOScreenStyles';
import {Constants, Images, Colors} from "../../resource/";

export default class OFOScreen extends Component {
    render() {
        return (

            < QRScannerView
                bottomMenuStyle={{height: 120, backgroundColor: '#000000', opacity: 1}}
                scanBarImage={Images.ic_scan_bar}
                cornerColor={Colors.yellow_FFD900}
                cornerOffsetSize={0}
                borderWidth={0}
                hintText={'请对准车牌上的二维码'}
                hintTextStyle={{color: Colors.yellow_FFD900, fontSize: 16, fontWeight: 'bold'}}
                hintTextPosition={110}
                maskColor={Colors.black_0000004D}
                onScanResultReceived={this.barcodeReceived.bind(this)}
                bottomMenuHeight={120}

                renderTopBarView={() => {
                    return (
                        <TitleBar
                            title={Constants.string_title_scanner_qrcode}
                            rightTitle={Constants.string_help}
                            leftIconPress={() => this.props.navigation.goBack()}
                        />
                    )
                }}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderMenu() {
        return (
            <View style={Styles.view_menu_container}>
                <View style={Styles.view_menu_item_container}>
                    <ImageButton
                        style={Styles.image_bottom_menu}
                        source={Images.ic_manual_input}
                    />
                    <Text
                        style={Styles.text_menu_title}
                    >手动输入车牌号</Text>
                </View>

                <View style={Styles.view_menu_item_container}>
                    <ImageButton
                        style={Styles.image_bottom_menu}
                        source={Images.ic_light_off}
                    />
                    <Text
                        style={Styles.text_menu_title}
                    >手电筒</Text>
                </View>
            </View>
        )
    }

    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}