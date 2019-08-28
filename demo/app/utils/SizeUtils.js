import { PixelRatio, Dimensions } from 'react-native';

const screenW = Dimensions.get( 'window' ).width;
const screenH = Dimensions.get( 'window' ).height;
const fontScale = PixelRatio.getFontScale();

/**
 *  以iphone6为基准,如果以其他尺寸为基准的话,
 *  请修改下面的 defaultWidth 和 defaultHeight 为对应尺寸即可. 以下为1倍图时
 */
const defaultWidth = 375;
const defaultHeight = 667;

//缩放比例
const _scaleWidth = screenW / defaultWidth;
const _scaleHeight = screenH / defaultHeight;

export function px2dp( size ) {
  return px2dpW( size );
}

/**
 * 屏幕适配,缩放size , 默认根据宽度适配，纵向也可以使用此方法
 * 横向的尺寸直接使用此方法
 * 如：width ,paddingHorizontal ,paddingLeft ,paddingRight ,marginHorizontal ,marginLeft ,marginRight
 * @param size 设计图的尺寸
 * @returns {number}
 */
export function px2dpW( size ) {
  return size * _scaleWidth;
}

/**
 * 屏幕适配 , 纵向的尺寸使用此方法应该会更趋近于设计稿
 * 如：height ,paddingVertical ,paddingTop ,paddingBottom ,marginVertical ,marginTop ,marginBottom
 * @param size 设计图的尺寸
 * @returns {number}
 */
export function px2dpH( size ) {
  return size * _scaleHeight;
}

/**
 * 设置字体的size（单位px）
 * @param size 传入设计稿上的px , allowFontScaling 是否根据设备文字缩放比例调整，默认不会
 * @returns {Number} 返回实际sp
 */
export function px2sp( size, allowFontScaling = false ) {
  const scale = Math.min( _scaleWidth, _scaleHeight );
  const fontSize = allowFontScaling ? 1 : fontScale;
  return ( size * scale ) / fontSize;
}
