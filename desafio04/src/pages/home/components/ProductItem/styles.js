import { StyleSheet } from 'react-native';

import { colors, metrics } from 'styles';

const styles = StyleSheet.create({
  container: {
    width: metrics.screenWidth / 2,
  },
  productContainer: {
    margin: 5,
    padding: 15,
    backgroundColor: colors.white,
  },
  imageContainer: {
    backgroundColor: colors.red,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    flex: 1,
    width: '100%',
    height: 200,
  },
  name: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 14,
  },
  brand: {
    color: colors.gray,
    fontSize: 12,
  },
  price: {
    color: colors.green,
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default styles;
