import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 15,
  },
  imageContainer: {
    height: 300,
  },
  image: {
    height: 300,
    backgroundColor: colors.red,
  },
  detailContainer: {
    flexDirection: 'row',
    marginTop: 10,
  },
  nameContainer: {
    flex: 1,
    flexGrow: 2,
    backgroundColor: colors.white,
  },
  name: {
    fontWeight: 'bold',
    color: colors.black,
    fontSize: 18,
  },
  brand: {
    color: colors.gray,
    fontSize: 14,
  },
  priceContainer: {
    flex: 1,
    flexGrow: 1,
    alignItems: 'flex-end',
  },
  price: {
    color: colors.green,
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    alignItems: 'stretch',
  },
  button: {
    backgroundColor: colors.green,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  buttonTitle: {
    color: colors.white,
    fontSize: 14,
  },
});

export default styles;
