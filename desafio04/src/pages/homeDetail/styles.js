import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backgroundColor,
    padding: 15,
  },
  loading: {
    marginTop: 10,
    alignSelf: 'center',
  },
});

export default styles;
