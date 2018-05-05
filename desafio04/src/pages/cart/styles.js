import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  totalContainer: {
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    marginBottom: 1,
  },
  title: {
    fontSize: 12,
    color: colors.gray,
  },
  price: {
    fontSize: 16,
    color: colors.green,
  },
});

export default styles;
