/**
 * Created by marno on 2017/4/9
 * Function: 可点击的 Image 组件
 * Desc:
 */
import React, {Component} from 'react';
import {Image, TouchableWithoutFeedback} from 'react-native';

export default class ImageButton extends Component {
    render() {
        return (
            <TouchableWithoutFeedback onPress={this.props.onPress}>
                <Image
                    style={this.props.style}
                    source={this.props.source}
                >
                    {this.props.children}
                </Image>
            </TouchableWithoutFeedback>
        )
    }
}