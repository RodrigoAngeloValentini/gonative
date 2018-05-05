import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  contentContainer: {
    flex: 1,
  },
  scroolView: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
  },
  productsContainer: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    flexWrap: 'wrap',
    flexDirection: 'row',
  },
  loading: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default styles;
