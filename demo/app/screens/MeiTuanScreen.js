import React, { Component, Fragment } from 'react';
import { StatusBar, StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';

import QRScannerView from '@app/components/QRScannerView';
import { ImageButton } from '@app/components';
import { Images, Colors, Dimens as D } from '@app/resource';

export default class MeiTuanScreen extends Component {
  
  state = {
    focusedScreen: false,
    torchOn: false,
  };
  
  componentDidMount(){
    const { navigation } = this.props;
    this.didFocusListener = navigation.addListener('didFocus', () =>
      this.setState({ focusedScreen: true }),
    );
  }
  
  componentWillUnmount(){
    this.didFocusListener && this.didFocusListener.remove();
  }
  
  renderTitleBar = () => {
    return (
      <View style={ styles.titleContainer }>
        <TouchableOpacity
          onPress={ () => this.props.navigation.goBack() }
          style={ styles.buttonBg }>
          <Image source={ Images.ic_back } style={ styles.actionBtn }/></TouchableOpacity>
        <View style={ { flex: 1 } }/>
        <TouchableOpacity
          onPress={ () => {Toast.show('Choose photo form library');} }
          style={ styles.buttonBg }>
          <Image source={ Images.ic_gallery } style={ styles.actionBtn }/></TouchableOpacity>
        <TouchableOpacity
          onPress={ () => {
            this.setState({ torchOn: !this.state.torchOn });
            Toast.show(`Torch ${ this.state.torchOn ? 'Off' : 'On' }`);
          } }
          style={ [ styles.buttonBg, { marginLeft: D.dp16 } ] }>
          <Image source={ Images.ic_flashlight } style={ styles.actionBtn }/></TouchableOpacity>
      </View>
    );
  };
  
  renderMenu(){
    return (
      <View style={ styles.viewMenuContainer }>
        <View style={ styles.viewMenuItemContainer }>
          <ImageButton style={ styles.imageBottomMenu } source={ Images.ic_meituan_scan }/>
          <Text style={ styles.textMenuTitle }>二维码</Text>
        </View>
        
        <View style={ styles.viewMenuItemContainer }>
          <ImageButton style={ styles.imageBottomMenu } source={ Images.ic_meituan_ar }/>
          <Text style={ styles.textMenuTitle }>AR</Text>
        </View>
      </View>
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
                scanBarAnimateTime={ 5000 }
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                rectStyle={ styles.rectStyle }
                cornerStyle={ styles.cornerStyle }
                scanBarImage={ Images.ic_scan_bar }
                hintText={ '请将二维码/条形码放入取景框中即可自动扫描' }
                hintTextStyle={ styles.hintTextStyle }
                maskColor={ Colors.black_0000004D }
                torchOn={ torchOn }
              />
              : null
          }
        </SafeAreaView>
      </Fragment>
    );
  }
  
}

const styles = StyleSheet.create({
  imageBottomMenu: {
    height: D.dp40,
    width: D.dp40,
    resizeMode: 'contain',
  },
  viewMenuContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: D.dp40,
    paddingHorizontal: D.dp16,
  },
  textMenuTitle: {
    color: 'white',
    fontSize: 14,
  },
  viewMenuItemContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  cornerStyle: {
    borderColor: Colors.yellow_ffc962,
    height: D.dp20,
    width: D.dp20,
    borderWidth: D.dp4,
  },
  bottomMenuView: {
    paddingVertical: D.dp16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.black_00000080,
  },
  rectStyle: {
    borderColor: Colors.white_fff,
    borderWidth: 1,
    height: D.dp200,
    width: D.dp200,
  },
  hintTextStyle: {
    color: Colors.white_fff,
    fontSize: D.dp14,
    backgroundColor: Colors.black_0000004D,
    borderRadius: D.dp16,
    paddingHorizontal: D.dp12,
    paddingVertical: D.dp6,
  },
  buttonBg: {
    backgroundColor: Colors.black_0000004D,
    width: D.dp48,
    height: D.dp48,
    borderRadius: D.dp24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  actionBtn: {
    height: D.dp24,
    width: D.dp24,
    resizeMode: 'contain',
  },
  titleContainer: {
    flexDirection: 'row',
    paddingHorizontal: D.dp16,
    marginTop: StatusBar.currentHeight + D.dp16,
  },
});
