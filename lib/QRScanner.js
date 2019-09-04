import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Animated,
  Easing,
  Text,
  Image,
  AppState,
} from 'react-native';
import PropTypes from 'prop-types';
import { RNCamera } from 'react-native-camera';

const defaultRectStyle = { height: 300, width: 300, borderWidth: 0, borderColor: '#000000', marginBottom: 0 };
const defaultCornerStyle = { height: 32, width: 32, borderWidth: 6, borderColor: '#1A6DD5' };
const defaultScanBarStyle = { marginHorizontal: 8, borderRadius: 2, backgroundColor: '#1A6DD5' };
const defaultHintTextStyle = { color: '#fff', fontSize: 14, backgroundColor: 'transparent', marginTop: 32 };

/**
 * Create by Marno on 2019-08-19 18:32
 * Function：扫描界面UI层
 * Desc：单独写一个类，方便拷贝使用
 */
export class QRScannerRectView extends Component {
  
  static propTypes = {
    maskColor: PropTypes.string, // 遮罩颜色
    rectStyle: PropTypes.object,// 扫码框样式
    
    cornerStyle: PropTypes.object,// 转角样式
    cornerOffsetSize: PropTypes.number,// 转角偏移距离
    isShowCorner: PropTypes.bool, // 是否显示转角
    
    isShowScanBar: PropTypes.bool, // 是否显示扫描条
    scanBarAnimateTime: PropTypes.number,// 扫描动画时长
    scanBarAnimateReverse: PropTypes.bool, // 扫描条来回移动
    scanBarImage: PropTypes.any,// 自定义扫描条图片
    scanBarStyle: PropTypes.object, // 扫描条样式
    
    hintText: PropTypes.string, // 提示文字
    hintTextStyle: PropTypes.object,// 提示文字样式
  };
  
  static defaultProps = {
    maskColor: '#0000004D',
    cornerOffsetSize: 0,
    isShowScanBar: true,
    isShowCorner: true,
    scanBarAnimateTime: 3000,
    hintText: '将二维码/条码放入框内，即可自动扫描',
  };
  
  state = {
    animatedValue: new Animated.Value(0),
  };
  
  constructor(props){
    super(props);
    this.innerRectStyle = Object.assign(defaultRectStyle, props.rectStyle);
    this.innerCornerStyle = Object.assign(defaultCornerStyle, props.cornerStyle);
    this.innerScanBarStyle = Object.assign(defaultScanBarStyle, props.scanBarStyle);
    this.innerHintTextStyle = Object.assign(defaultHintTextStyle, props.hintTextStyle);
  }
  
  componentDidMount(){
    this.scanBarMove();
  }
  
  componentWillUnmount(){
    this.scanBarAnimation && this.scanBarAnimation.stop();
  }
  
  // 扫描动画
  scanBarMove(){
    const { cornerOffsetSize, scanBarAnimateReverse, isShowScanBar } = this.props;
    const scanBarHeight = isShowScanBar ? this.innerScanBarStyle.height || 4 : 0;
    const startValue = this.innerCornerStyle.borderWidth;
    const endValue = this.innerRectStyle.height - (this.innerRectStyle.borderWidth + cornerOffsetSize + this.innerCornerStyle.borderWidth) - scanBarHeight;
    if ( scanBarAnimateReverse ) {
      this.scanBarAnimation = Animated.sequence([
        Animated.timing(this.state.animatedValue, {
          toValue: endValue,
          duration: this.props.scanBarAnimateTime,
          easing: Easing.linear,
          isInteraction: false,
          useNativeDriver: true,
        }),
        Animated.timing(this.state.animatedValue, {
          toValue: startValue,
          duration: this.props.scanBarAnimateTime,
          easing: Easing.linear,
          isInteraction: false,
          useNativeDriver: true,
        }),
      ]).start(() => this.scanBarMove());
    } else {
      this.state.animatedValue.setValue(startValue);  //重置Rotate动画值为0
      this.scanBarAnimation = Animated.timing(this.state.animatedValue, {
        toValue: endValue,
        duration: this.props.scanBarAnimateTime,
        easing: Easing.linear,
        isInteraction: false,
        useNativeDriver: true,
      }).start(() => this.scanBarMove());
    }
  }
  
  //获取背景颜色
  getBackgroundColor = () => {
    return { backgroundColor: this.props.maskColor };
  };
  
  //获取扫描框背景大小
  getRectSize = () => {
    return { height: this.innerRectStyle.height, width: this.innerRectStyle.width };
  };
  
  //获取扫描框偏移量
  getRectOffsetHeight = () => {
    return { height: this.innerRectStyle.marginBottom };
  };
  
  //获取扫描框边框大小
  getBorderStyle(){
    const { cornerOffsetSize } = this.props;
    return {
      height: this.innerRectStyle.height - cornerOffsetSize * 2,
      width: this.innerRectStyle.width - cornerOffsetSize * 2,
      borderWidth: this.innerRectStyle.borderWidth,
      borderColor: this.innerRectStyle.borderColor,
    };
  }
  
  //获取扫描框转角的颜色
  getCornerStyle(){
    return {
      height: this.innerCornerStyle.height,
      width: this.innerCornerStyle.width,
      borderColor: this.innerCornerStyle.borderColor,
    };
  }
  
  getScanImageWidth(){
    return this.innerRectStyle.width - this.innerScanBarStyle.marginHorizontal * 2;
  }
  
  // 获取扫描条图片的高度
  measureScanBarImage = (e) => {
    this.setState({ scanBarImageHeight: Math.round(e.layout.height) });
  };
  
  //绘制扫描线
  renderScanBar(){
    const { isShowScanBar, scanBarImage } = this.props;
    
    if ( !isShowScanBar ) return;
    return scanBarImage
      ? <Image source={ scanBarImage }
               style={ [
                 this.innerScanBarStyle,
                 {
                   resizeMode: 'contain',
                   backgroundColor: 'transparent',
                   width: this.getScanImageWidth(),
                 },
               ] }/>
      : <View style={ [ { height: 4 }, this.innerScanBarStyle ] }/>;
  }
  
  render(){
    const animatedStyle = {
      transform: [ { translateY: this.state.animatedValue } ],
    };
    
    const { borderWidth } = this.innerCornerStyle;
    const { isShowCorner } = this.props;
    
    return (
      <View style={ [ styles.container, { bottom: 0 } ] }>
        
        {/*扫描框上方遮罩*/ }
        <View style={ [ this.getBackgroundColor(), { flex: 1 } ] }/>
        
        <View style={ { flexDirection: 'row' } }>
          
          {/*扫描框左侧遮罩*/ }
          <View style={ [ this.getBackgroundColor(), { flex: 1 } ] }/>
          
          {/*扫描框*/ }
          <View style={ [ styles.viewfinder, this.getRectSize() ] }>
            
            {/*扫描框边线*/ }
            <View style={ this.getBorderStyle() }>
              <Animated.View style={ [ animatedStyle ] }>
                { this.renderScanBar() }
              </Animated.View>
            </View>
            
            {/*/!*扫描框转角-左上角*!/*/ }
            { isShowCorner && <View style={ [
              this.getCornerStyle(),
              styles.topLeftCorner,
              { borderLeftWidth: borderWidth, borderTopWidth: borderWidth },
            ] }/> }
            
            {/*扫描框转角-右上角*/ }
            { isShowCorner && <View style={ [
              this.getCornerStyle(),
              styles.topRightCorner,
              { borderRightWidth: borderWidth, borderTopWidth: borderWidth },
            ] }/> }
            
            {/*扫描框转角-左下角*/ }
            { isShowCorner && <View style={ [
              this.getCornerStyle(),
              styles.bottomLeftCorner,
              { borderLeftWidth: borderWidth, borderBottomWidth: borderWidth },
            ] }/> }
            
            {/*扫描框转角-右下角*/ }
            { isShowCorner && <View style={ [
              this.getCornerStyle(),
              styles.bottomRightCorner,
              { borderRightWidth: borderWidth, borderBottomWidth: borderWidth },
            ] }/> }
          </View>
          
          {/*扫描框右侧遮罩*/ }
          <View style={ [ this.getBackgroundColor(), { flex: 1 } ] }/>
        
        </View>
        
        {/*扫描框下方遮罩*/ }
        <View style={ [ this.getBackgroundColor(), { flex: 1, alignItems: 'center' } ] }>
          <Text style={ this.innerHintTextStyle } numberOfLines={ 1 }>{ this.props.hintText }</Text>
        </View>
        
        <View style={ [ this.getBackgroundColor(), this.getRectOffsetHeight() ] }/>
      
      </View>
    );
  }
}

/**
 * Create by Marno on 2019-08-19 18:33
 * Function：扫码界面相机层
 * Desc：
 */
export default class QRScannerView extends Component {
  
  static propTypes = {
    
    maskColor: PropTypes.string,
    rectStyle: PropTypes.object,
    
    cornerStyle: PropTypes.object,
    cornerOffsetSize: PropTypes.number,
    isShowCorner: PropTypes.bool,
    
    isShowScanBar: PropTypes.bool,
    scanBarAnimateTime: PropTypes.number,
    scanBarAnimateReverse: PropTypes.bool,
    scanBarImage: PropTypes.any,
    scanBarStyle: PropTypes.object,
    
    hintText: PropTypes.string,
    hintTextStyle: PropTypes.object,
    
    renderHeaderView: PropTypes.func,
    renderFooterView: PropTypes.func,
    
    onScanResult: PropTypes.func,
    scanInterval: PropTypes.number,
    torchOn: PropTypes.bool,
    userFront: PropTypes.bool, // 是否使用前置摄像头
  };
  
  static defaultProps = {
    torchOn: false,
    scanInterval: 2000,
    userFront: false,
  };
  
  constructor(props){
    super(props);
    // 避免频繁触发扫描回调
    this.onScanResult = throttle(this.onScanResult, this.props.scanInterval, { maxWait: 0, trailing: false });
  }
  
  componentDidMount(){
    AppState.addEventListener('change', this.handleAppStateChange);
  }
  
  componentWillUnmount(){
    AppState.removeEventListener('change', this.handleAppStateChange);
    this.rnCamera && this.rnCamera.pausePreview();
  }
  
  handleAppStateChange = (currentAppState) => {
    if ( currentAppState !== 'active' ) {
      this.rnCamera && this.rnCamera.pausePreview();
    } else {
      this.rnCamera && this.rnCamera.resumePreview();
    }
  };
  
  onScanResult = (e) => this.props.onScanResult(e);
  
  render(){
    const { renderHeaderView, renderFooterView, torchOn, userFront } = this.props;
    
    return (
      <RNCamera
        ref={ ref => this.rnCamera = ref }
        captureAudio={ false }
        onBarCodeRead={ this.onScanResult }
        type={ userFront ? RNCamera.Constants.Type.front : RNCamera.Constants.Type.back }
        flashMode={ torchOn ? RNCamera.Constants.FlashMode.torch : RNCamera.Constants.FlashMode.off }
        style={ { flex: 1 } }
      >
        
        {/*绘制扫描遮罩*/ }
        <QRScannerRectView
          maskColor={ this.props.maskColor }
          rectStyle={ this.props.rectStyle }
          isShowCorner={ this.props.isShowCorner }
          cornerStyle={ this.props.cornerStyle }
          cornerOffsetSize={ this.props.cornerOffsetSize }
          isShowScanBar={ this.props.isShowScanBar }
          scanBarAnimateTime={ this.props.scanBarAnimateTime }
          scanBarAnimateReverse={ this.props.scanBarAnimateReverse }
          scanBarImage={ this.props.scanBarImage }
          scanBarStyle={ this.props.scanBarStyle }
          hintText={ this.props.hintText }
          hintTextStyle={ this.props.hintTextStyle }
        />
        
        {/*绘制顶部标题栏组件*/ }
        { renderHeaderView && <View style={ [ styles.topContainer ] }>{ renderHeaderView() }</View> }
        
        {/*绘制底部操作栏*/ }
        { renderFooterView && <View style={ [ styles.bottomContainer ] }>{ renderFooterView() }</View> }
      
      </RNCamera>
    );
  }
}

const styles = StyleSheet.create({
  topContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  bottomContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
  },
  container: {
    flex: 1,
  },
  viewfinder: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeftCorner: {
    position: 'absolute',
    top: 0,
    left: 0,
  },
  topRightCorner: {
    position: 'absolute',
    top: 0,
    right: 0,
  },
  bottomLeftCorner: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  bottomRightCorner: {
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});

// Copy from lodash 
function throttle(func, wait, options){
  let leading = true;
  let trailing = true;
  
  if ( typeof func !== 'function' ) {
    throw new TypeError('Expected a function');
  }
  if ( isObject(options) ) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    leading,
    trailing,
    'maxWait': wait,
  });
}

// Copy from lodash 
function debounce(func, wait, options){
  let lastArgs,
    lastThis,
    maxWait,
    result,
    timerId,
    lastCallTime;
  
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  
  // Bypass `requestAnimationFrame` by explicitly setting `wait=0`.
  const useRAF = (!wait && wait !== 0 && typeof root.requestAnimationFrame === 'function');
  
  if ( typeof func !== 'function' ) {
    throw new TypeError('Expected a function');
  }
  wait = +wait || 0;
  if ( isObject(options) ) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? Math.max(+options.maxWait || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  
  function invokeFunc(time){
    const args = lastArgs;
    const thisArg = lastThis;
    
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }
  
  function startTimer(pendingFunc, wait){
    if ( useRAF ) {
      root.cancelAnimationFrame(timerId);
      return root.requestAnimationFrame(pendingFunc);
    }
    return setTimeout(pendingFunc, wait);
  }
  
  function cancelTimer(id){
    if ( useRAF ) {
      return root.cancelAnimationFrame(id);
    }
    clearTimeout(id);
  }
  
  function leadingEdge(time){
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = startTimer(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }
  
  function remainingWait(time){
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    const timeWaiting = wait - timeSinceLastCall;
    
    return maxing
      ? Math.min(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }
  
  function shouldInvoke(time){
    const timeSinceLastCall = time - lastCallTime;
    const timeSinceLastInvoke = time - lastInvokeTime;
    
    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }
  
  function timerExpired(){
    const time = Date.now();
    if ( shouldInvoke(time) ) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = startTimer(timerExpired, remainingWait(time));
  }
  
  function trailingEdge(time){
    timerId = undefined;
    
    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if ( trailing && lastArgs ) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }
  
  function cancel(){
    if ( timerId !== undefined ) {
      cancelTimer(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }
  
  function flush(){
    return timerId === undefined ? result : trailingEdge(Date.now());
  }
  
  function pending(){
    return timerId !== undefined;
  }
  
  function debounced(...args){
    const time = Date.now();
    const isInvoking = shouldInvoke(time);
    
    lastArgs = args;
    lastThis = this;
    lastCallTime = time;
    
    if ( isInvoking ) {
      if ( timerId === undefined ) {
        return leadingEdge(lastCallTime);
      }
      if ( maxing ) {
        // Handle invocations in a tight loop.
        timerId = startTimer(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if ( timerId === undefined ) {
      timerId = startTimer(timerExpired, wait);
    }
    return result;
  }
  
  debounced.cancel = cancel;
  debounced.flush = flush;
  debounced.pending = pending;
  return debounced;
}

// Copy from lodash 
function isObject(value){
  const type = typeof value;
  return value != null && (type === 'object' || type === 'function');
}
