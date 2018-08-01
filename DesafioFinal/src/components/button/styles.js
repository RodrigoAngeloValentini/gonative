import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  button: {
    height: metrics.buttonHeight,
    backgroundColor: colors.green,
    borderRadius: metrics.baseRadius,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.white,
  },
});

export default styles;
