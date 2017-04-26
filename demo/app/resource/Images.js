/**
 * Created by marno on 2017/4/6
 * Function:所有图片入口
 * Desc:将图片统一管理，避免因改变路径后导致图片引用维护困难
 */
const images = {
    /**
     * Common
     */
    ic_avatar: require('./imgs/avatar.jpg'),
    ic_back: require('./imgs/back.png'),


    /**
     * OFO
     */
    ic_light_off: require('./imgs/scanLigtOff.png'),
    ic_light_on: require('./imgs/scanLightOn.png'),
    ic_manual_input: require('./imgs/manualInput.png'),
    ic_scan_bar: require('./imgs/scanBar.png'),

    /**
     * Twitter
     */
    ic_camera: require('./imgs/camera.png'),
    ic_close: require('./imgs/remove.png'),

    /**
     * QQBrowser
     */
    ic_qrcode_light:require('./imgs/qrcodeLigthOn.png'),
    ic_qq_back:require('./imgs/qqback.png'),

    /**
     * DingTalk
     */
    ic_ding_scan_card:require('./imgs/scanCard.png'),
    ic_ding_scan_qr:require('./imgs/scanQR.png'),
    ic_ding_close:require('./imgs/dingClose.png'),
    ic_ding_more:require('./imgs/dingMore.png'),
    ic_ding_viewfinder:require('./imgs/viewfinder.png'),

    /**
     * WeChat
     */
    ic_wechat_scan_word:require('./imgs/scanWord.png'),
    ic_wechat_scan_hl:require('./imgs/scanHl.png'),
    ic_wechat_scan_street:require('./imgs/scanStreet.png'),
    ic_wechat_scan_book:require('./imgs/scanBook.png'),
    ic_wechat_back:require('./imgs/wechatBack.png'),
    ic_wechat_more:require('./imgs/wechatMore.png'),


};

export default images;