import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  categoryBox: {
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 15,
    paddingLeft: 15,
    paddingTop: 12,
  },
  categoryTitle: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
    opacity: 0.4,
    flex: 1,
    borderBottomWidth: 4,
    borderColor: colors.red,
  },
  categoryTitleActive: {
    opacity: 1,
    borderColor: colors.white,
  },
});

export default styles;
