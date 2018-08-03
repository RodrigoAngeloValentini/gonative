import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.navBarHeight,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: fonts.big,
    color: colors.white,
  },
});

export default styles;
