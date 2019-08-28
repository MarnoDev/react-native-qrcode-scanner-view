import React, { Component, Fragment } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';

import QRScannerView from '@app/components/QRScannerView';
import { ImageButton, TitleBar } from '@app/components';
import { Colors, Dimens as D, Images } from '@app/resource';

export default class TikTokScreen extends Component {
  
  state = {
    focusedScreen: false,
    torchOn: false,
  };
  
  componentDidMount(){
    const { navigation } = this.props;
    
    this.didFocusListener = navigation.addListener('didFocus', () => {
        this.setState({ focusedScreen: true });
      },
    );
  }
  
  componentWillUnmount(){
    this.didFocusListener && this.didFocusListener.remove();
  }
  
  renderTitleBar = () => {
    return (
      <View style={ styles.titleContainer }>
        <ImageButton
          onPress={ () => this.props.navigation.goBack() }
          style={ styles.imgBack }
          source={ Images.ic_back }/>
        <Text style={ styles.titleText }>扫一扫</Text>
        <Text style={ styles.subTitleText }>相册</Text>
      </View>
    );
  };
  
  renderMenu = () => {
    
    return (
      <Image
        source={ Images.ic_qrcode }
        style={ styles.imgQRCode }/>
    );
  };
  
  barcodeReceived = (event) => {
    Toast.show('Type: ' + event.type + '\nData: ' + event.data);
  };
  
  render(){
    const { focusedScreen, torchOn } = this.state;
    
    return (
      <Fragment>
        <StatusBar barStyle='light-content' translucent={ true } backgroundColor={ Colors.transparent }/>
        <SafeAreaView style={ { flex: 1, backgroundColor: Colors.black_0000004D } }>
          {
            focusedScreen
              ? < QRScannerView
                torchOn={ torchOn }
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                hintText={ '将二维码放入框内，即可自动扫描' }
                rectStyle={ styles.rectStyle }
                cornerStyle={ styles.cornerStyle }
                scanBarImage={ Images.ic_tiktok_scan_bar }
                scanBarStyle={ { marginHorizontal: 0, height: D.dp56 } }
              />
              : null
          }
          <TouchableOpacity
            onPress={ () => {
              this.setState({ torchOn: !torchOn });
              Toast.show(`Torch ${ torchOn ? 'Off' : 'On' }`);
            } }
            style={ styles.flashlightWrap }>
            <ImageButton source={ Images.ic_flashlight } style={ styles.imgFlashlight }/>
            <Text style={ styles.flashlightText }>轻触照亮</Text>
          </TouchableOpacity>
        </SafeAreaView>
      </Fragment>
    );
  }
  
}

const styles = StyleSheet.create({
  imgQRCode: {
    height: D.dp40,
    width: D.dp40,
    resizeMode: 'contain',
    marginBottom: D.dp32,
    alignSelf: 'center',
  },
  rectStyle: {
    marginBottom: D.dp80,
  },
  titleBar: {
    marginTop: StatusBar.currentHeight + D.dp16,
    paddingHorizontal: D.dp16,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imageBottomMenu: {
    height: D.dp24,
    width: D.dp24,
    resizeMode: 'contain',
  },
  cornerStyle: {
    borderColor: Colors.white_fff,
    height: D.dp16,
    width: D.dp16,
    borderWidth: D.dp3,
  },
  flashlightWrap: {
    position: 'absolute',
    alignSelf: 'center',
    top: '54%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgFlashlight: {
    width: D.dp24,
    height: D.dp24,
    resizeMode: 'contain',
  },
  flashlightText: {
    color: Colors.white_fff,
    fontSize: D.dp12,
    marginTop: D.dp4,
  },
  titleText: {
    color: Colors.white_fff,
    fontSize: D.dp16,
  },
  subTitleText: {
    color: Colors.white_fff,
    fontSize: D.dp12,
  },
  imgBack: {
    height: D.dp20,
    width: D.dp20,
    resizeMode: 'contain',
  },
  titleContainer: {
    paddingHorizontal: D.dp16,
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight + D.dp8,
    flexDirection: 'row',
  },
});
