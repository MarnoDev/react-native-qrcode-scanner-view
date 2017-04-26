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

import Styles from './styles/TwitterScreenStyles';
import {Constants, Images, Colors} from "../../resource/";


export default class TwitterScreen extends Component {
    render() {
        return (

            < QRScannerView
                cornerBorderLength={80}
                cornerBorderWidth={6}
                rectWidth={280}
                rectHeight={280}
                scanBarImage={null}
                cornerColor={Colors.blue_1DA1F266}
                cornerOffsetSize={0}
                borderWidth={0}
                hintText={'我的二维码'}
                hintTextStyle={{
                    color: Colors.white_fff,
                    fontSize: 16,
                    backgroundColor: Colors.blue_1DA1F2,
                    paddingTop: 8,
                    paddingBottom: 8,
                    paddingLeft: 32,
                    paddingRight: 32,
                    borderRadius: 4,
                }}
                hintTextPosition={70}
                maskColor={Colors.black_0000004D}
                bottomMenuHeight={80}
                bottomMenuStyle={{backgroundColor:Colors.black_0000004D,height:80}}
                onScanResultReceived={this.barcodeReceived.bind(this)}
                isShowScanBar={false}

                renderTopBarView={() => {
                    return (
                        <ImageButton
                            style={Styles.image_top_close}
                            source={Images.ic_close}
                            onPress={() => this.props.navigation.goBack()}
                        />)
                }}

                renderBottomMenuView={() => this._renderMenu()}
            />
        )
    }

    _renderMenu() {
        return (
            <ImageButton
                style={Styles.image_camera}
                source={Images.ic_camera}
            />
        )
    }


    barcodeReceived(e) {
        Toast.show('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}