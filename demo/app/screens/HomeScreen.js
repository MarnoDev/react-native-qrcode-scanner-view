import React, { Component, Fragment } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Text,
  FlatList,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import { SafeAreaView } from 'react-navigation';
import LinearGradient from 'react-native-linear-gradient';

import { Images, Colors, Dimens as D } from '@app/resource';

const items = [
  { icon: Images.ic_default, name: 'Default', screenName: 'DefaultScreen', bgColor: Colors.bg1 },
  { icon: Images.ic_wechat, name: 'WeChat', screenName: 'WeChatScreen', bgColor: Colors.bg2 },
  { icon: Images.ic_meituan, name: 'MeiTuan', screenName: 'MeiTuanScreen', bgColor: Colors.bg5 },
  { icon: Images.ic_twitter, name: 'Twitter', screenName: 'TwitterScreen', bgColor: Colors.bg3 },
  { icon: Images.ic_tiktok, name: 'TikTok', screenName: 'TikTokScreen', bgColor: Colors.bg4 },
];

export default class HomeScreen extends Component {
  
  renderItem = (item) => {
    return (
      <TouchableOpacity onPress={ () => this.props.navigation.navigate(item.screenName) }>
        <LinearGradient
          style={ styles.itemContainer }
          useAngle={ true }
          angle={ 90 }
          colors={ item.bgColor }
        >
          <Text style={ styles.itemText }>{ item.name }</Text>
          <Image style={ styles.itemIcon } source={ item.icon }/>
        </LinearGradient>
      </TouchableOpacity>
    );
  };
  
  render(){
    return (
      <Fragment>
        <StatusBar barStyle='light-content' backgroundColor={ Colors.black_393A3F }/>
        <SafeAreaView style={ styles.container }>
          <View style={ { flex: 1 } }>
            
            <View style={ styles.avatarWrap }>
              <Text style={ styles.titleText }>Marno</Text>
              <Image style={ styles.imgAvatar } source={ Images.ic_avatar }/>
            </View>
            
            <FlatList
              keyExtractor={ item => item.name }
              data={ items }
              renderItem={ ({ item }) => this.renderItem(item) }
            />
            
            <Text style={ styles.textIntro }>欢迎关注公众号：Marno</Text>
          </View>
        </SafeAreaView>
      </Fragment>
    );
  }
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.black_393A3F,
  },
  avatarWrap: {
    marginBottom: D.dp32,
    marginTop: D.dp24,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: D.dp24,
  },
  imgAvatar: {
    height: D.dp64,
    width: D.dp64,
    resizeMode: 'contain',
    borderRadius: D.dp200,
  },
  itemContainer: {
    marginBottom: D.dp16,
    marginHorizontal: D.dp16,
    borderRadius: D.dp16,
    paddingHorizontal: D.dp24,
    paddingVertical: D.dp24,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  itemText: {
    fontSize: D.dp20,
    color: 'white',
    fontWeight: 'bold',
  },
  itemIcon: {
    height: D.dp40,
    width: D.dp40,
    marginLeft: D.dp16,
    alignContent: 'center',
    resizeMode: 'contain',
  },
  textIntro: {
    position: 'absolute',
    bottom: D.dp8,
    right: D.dp8,
    color: Colors.gray_C0C0C0,
  },
  titleText: {
    fontSize: D.dp24,
    fontWeight: 'bold',
    color: Colors.white_fff,
  },
});
