import React, { Component, Fragment } from 'react';
import { View, Text, StatusBar } from 'react-native';
import { Toast } from '@ant-design/react-native';
import { SafeAreaView } from 'react-navigation';

import QRScannerView from '@app/components/QRScannerView';
import { Colors, Dimens as D } from '@app/resource';

export default class DefaultScreen extends Component {
  
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
      <Text
        style={ {
          color: 'white',
          textAlignVertical: 'center',
          textAlign: 'center',
          fontSize: D.dp20,
          padding: D.dp12,
          marginTop: StatusBar.currentHeight,
          backgroundColor: Colors.black_00000080,
        } }
      >Title</Text>
    );
  };
  
  renderMenu = () => {
    
    return (
      <Text style={ {
        color: 'white',
        textAlignVertical: 'center',
        textAlign: 'center',
        fontSize: D.dp20,
        padding: D.dp32,
        backgroundColor: Colors.black_00000080,
      } }
      >Action Menu</Text>
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
              />
              : null
          }
        </SafeAreaView>
      </Fragment>
    );
  }
}

