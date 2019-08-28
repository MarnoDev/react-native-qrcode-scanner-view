import React, { Component, Fragment } from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';

import QRScannerView from '@app/components/QRScannerView';
import { ImageButton, TitleBar } from '@app/components';
import { Images, Colors, Dimens as D } from '@app/resource';

const menuItems = [
  { icon: Images.ic_wechat_scan_hl, name: '二维码' },
  { icon: Images.ic_wechat_scan_book, name: '封面' },
  { icon: Images.ic_wechat_scan_street, name: '街景' },
  { icon: Images.ic_wechat_scan_word, name: '翻译' },
];

export default class WeChatScreen extends Component {
  
  state = {
    focusedScreen: false,
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
      <TitleBar
        style={ { marginTop: StatusBar.currentHeight } }
        titleColor={ Colors.white_fff }
        title={ Constants.string_title_wechat_scanner }
        rightIcon={ Images.ic_wechat_more }
        leftIcon={ Images.ic_wechat_back }
        leftIconPress={ () => this.props.navigation.goBack() }
      />
    );
  };
  
  renderBottomMenuItem = (item) => (
    <View
      key={ item.name }
      style={ styles.viewBottomMenuItem }>
      <ImageButton style={ styles.imageBottomMenu } source={ item.icon }/>
      <Text style={ styles.textBottomMenuItem }>{ item.name }</Text>
    </View>
  );
  
  renderMenu = () => {
    return (
      <View style={ styles.bottomMenuView }>
        { menuItems.map(item => this.renderBottomMenuItem(item)) }
      </View>
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
                hintTextStyle={ { color: Colors.gray_C0C0C0 } }
                maskColor={ Colors.black_0000004D }
                scanBarAnimateTime={ 3000 }
                onScanResult={ this.barcodeReceived }
                renderHeaderView={ this.renderTitleBar }
                renderFooterView={ this.renderMenu }
                rectStyle={ styles.rectStyle }
                cornerStyle={ styles.cornerStyle }
                scanBarStyle={ { backgroundColor: Colors.green_65E102 } }
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
    height: D.dp32,
    width: D.dp32,
    resizeMode: 'contain',
  },
  viewBottomMenuItem: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBottomMenuItem: {
    color: Colors.white_fff,
    marginTop: D.dp8,
  },
  cornerStyle: {
    borderColor: Colors.green_65E102,
    height: D.dp16,
    width: D.dp16,
    borderWidth: D.dp3,
  },
  bottomMenuView: {
    paddingVertical: D.dp16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: Colors.black_00000080,
  },
  rectStyle: {
    borderColor: Colors.gray_C0C0C0,
    borderWidth: 0.5,
    height: D.dp240,
    width: D.dp240,
  },
});
