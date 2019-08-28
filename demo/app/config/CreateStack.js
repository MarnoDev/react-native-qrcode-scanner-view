import { createStackNavigator } from 'react-navigation';

import HomeScreen from '@app/screens/HomeScreen';
import DefaultScreen from '@app/screens/DefaultScreen';
import WeChatScreen from '@app/screens/WeChatScreen';
import MeiTuanScreen from '@app/screens/MeiTuanScreen';
import TwitterScreen from '@app/screens/TwitterScreen';
import TikTokScreen from '@app/screens/TikTokScreen';

// import TwitterScreen from './screens/twitter/TwitterScreen';
// import QQBrowserScreen from './screens/qqbrowser/QQBrowserScreen';

export const createStack = () =>
  createStackNavigator(
    {
      HomeScreen,
      DefaultScreen,
      WeChatScreen,
      MeiTuanScreen,
      TwitterScreen,
      TikTokScreen,
    },
    {
      headerMode: 'none',
    },
  );
