import { StyleSheet } from 'react-native';
import { colors, fonts, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.purple,
  },

  calendar: {
    flexDirection: 'row',
    backgroundColor: colors.purpleDark,
    borderBottomWidth: 1,
    borderBottomColor: colors.purpleDarker,
  },

  scrollview: {
    flex: 1,
  },

  containerEmpty: {
    marginTop: metrics.basePadding * 4,
    justifyContent: 'center',
    alignItems: 'center',
  },

  titleEmpty: {
    color: colors.purpleDarker,
    fontSize: fonts.smaller,
    fontWeight: 'bold',
  },
});

export default styles;
