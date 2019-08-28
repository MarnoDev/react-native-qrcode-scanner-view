import React, { Component, Fragment } from 'react';
import { View, Text, StatusBar, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';

import QRScannerView from '@app/components/QRScannerView';
import { ImageButton } from '@app/components';
import { Colors, Dimens as D, Images } from '@app/resource';

export default class TwitterScreen extends Component {
  state = {
    focusedScreen: false,
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
      <View style={ styles.titleBar }>
        <ImageButton
          onPress={ () => this.props.navigation.goBack() }
          style={ styles.imageBottomMenu } source={ Images.ic_close }/>
        <ImageButton
          onPress={ () => {Toast.show('Choose photo form library');} }
          style={ styles.imageBottomMenu } source={ Images.ic_gallery }/>
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
    const { focusedScreen } = this.state;
    
    return (
      <Fragment>
        <StatusBar barStyle='light-content' translucent={ true } backgroundColor={ Colors.transparent }/>
        <SafeAreaView style={ { flex: 1, backgroundColor: Colors.black_0000004D } }>
          {
            focusedScreen
              ? < QRScannerView
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                scanBarAnimateReverse={ true }
                isShowScanBar={ false }
                isShowCorner={ false }
                hintText={ ' ' }
                maskColor={ Colors.black_00000080 }
                rectStyle={ styles.rectStyle }
              />
              : null
          }
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
    borderWidth: D.dp5,
    borderColor: Colors.white_fff,
    height: D.dp300,
    width: D.dp300,
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
});
