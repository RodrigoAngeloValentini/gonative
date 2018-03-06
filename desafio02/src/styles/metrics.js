import { Platform } from 'react-native';

export default {
  statusBarHeight: (Platform.os === 'ios') ? 20 : 0,
};
