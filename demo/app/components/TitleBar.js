/**
 * Created by marno on 2017/4/9
 * Func: 顶部标题栏
 * Desc:
 */
import React, {Component} from "react";
import {StyleSheet, Text, View} from 'react-native';

import {Images} from '../resource/'
import ImageButton from "./ImageButton";


export default class TitleBar extends Component {

    static propTypes = {
        leftIcon: React.PropTypes.number,
        rightIcon: React.PropTypes.number,
        rightTitle: React.PropTypes.string,
        leftIconPress: React.PropTypes.func,
        rightIconPress: React.PropTypes.func,
        bgColor:React.PropTypes.string,
        titleColor:React.PropTypes.string,
    };

    static defaultProps = {
        leftIcon: Images.ic_back,
        bgColor:'white'
    };

    render() {
        return (
            <View style={[styles.view_header_container,{backgroundColor:this.props.bgColor}]}>
                <ImageButton
                    style={styles.image_header_left}
                    source={this.props.leftIcon}
                    onPress={this.props.leftIconPress}
                />
                <Text style={[styles.text_title,{color:this.props.titleColor}]}>{this.props.title}</Text>
                {this._renderRight()}
            </View>
        )
    }

    /**
     * 根据传入值判断右边渲染文字还是图标
     */
    _renderRight() {
        if (this.props.rightIcon) {
            return (  <ImageButton
                style={styles.image_header_right}
                source={this.props.rightIcon}
                onPress={this.props.rightIconPress}
            />)
        } else if (this.props.rightTitle) {
            return (
                <Text style={styles.text_right_title}>
                    {this.props.rightTitle}
                </Text>
            )
        }
    }

}

const styles = StyleSheet.create({
    view_header_container: {
        height: 56,
        backgroundColor: 'white',
        flexDirection:'row',
        alignItems:'center'
    },
    image_header_left: {
        height: 24,
        width: 24,
        marginLeft: 8,
        marginRight:32,
    },
    image_header_right: {
        height: 24,
        width: 24,
        marginRight: 8,
        position:'absolute',
        right:0,
    },
    text_right_title: {
        color: '#000',
        position:'absolute',
        right:16,
    },
    text_title:{
        color: '#000',
        fontSize:18,
    }
})