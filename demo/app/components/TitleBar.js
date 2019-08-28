import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

import { Images } from '../resource';
import ImageButton from './ImageButton';

export default class TitleBar extends Component {
  
  static propTypes = {
    leftIcon: PropTypes.number,
    rightIcon: PropTypes.number,
    rightTitle: PropTypes.string,
    leftIconPress: PropTypes.func,
    rightIconPress: PropTypes.func,
    titleColor: PropTypes.string,
    style: PropTypes.object,
    centerTitle: PropTypes.bool,
  };
  
  static defaultProps = {
    leftIcon: Images.ic_back,
    bgColor: 'white',
    centerTitle: false,
  };
  
  renderRight(){
    if ( this.props.rightIcon ) {
      return (<ImageButton
        style={ styles.imageHeaderRight }
        source={ this.props.rightIcon }
        onPress={ this.props.rightIconPress }
      />);
    } else if ( this.props.rightTitle ) {
      return (
        <Text style={ [ styles.textRightTitle, { color: this.props.titleColor } ] }>
          { this.props.rightTitle }
        </Text>
      );
    }
  }
  
  render(){
    const centerTitleStyle = this.props.centerTitle ? {  alignSelf: 'center' } : {};
    
    return (
      <View style={ [ styles.viewHeaderContainer, this.props.style ] }>
        <ImageButton
          style={ styles.imageHeaderLeft }
          source={ this.props.leftIcon }
          onPress={ this.props.leftIconPress }
        />
        <Text
          style={ [ styles.textTitle, centerTitleStyle, { color: this.props.titleColor } ] }>{ this.props.title }</Text>
        { this.renderRight() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewHeaderContainer: {
    height: 56,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageHeaderLeft: {
    height: 24,
    width: 24,
    marginLeft: 16,
    marginRight: 32,
  },
  imageHeaderRight: {
    height: 24,
    width: 24,
    marginRight: 8,
    position: 'absolute',
    right: 0,
  },
  textRightTitle: {
    color: '#000',
    position: 'absolute',
    right: 16,
  },
  textTitle: {
    color: '#000',
    fontSize: 18,
  },
});
