import { StyleSheet } from 'react-native';
import { colors, metrics, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    height: metrics.navBarHeight,
    backgroundColor: colors.purple,
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerHeader: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  containerTitle: {
    width: metrics.screenWidth / 2,
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: fonts.big,
    color: colors.white,
  },

  iconLeft: {
    flex: 1,
    maxWidth: 40,
    marginLeft: 10,
    padding: 5,
    alignItems: 'center',
  },

  iconRight: {
    flex: 1,
    maxWidth: 40,
    marginRight: 10,
    padding: 5,
    alignItems: 'center',
  },
});

export default styles;
