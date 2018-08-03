import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleContainer: {
    height: metrics.navBarHeight,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.purpleDark,
  },
  title: {
    fontSize: fonts.big,
    color: colors.white,
  },
  formContainer: {
    flex: 1,
    padding: metrics.basePadding,
    backgroundColor: colors.purple,
  },
});

export default styles;
