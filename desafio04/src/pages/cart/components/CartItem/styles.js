import { StyleSheet } from 'react-native';

import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: colors.white,
    margin: 15,
    borderRadius: 5,
    height: 100,
  },
  containerContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  detailContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingRight: 5,
    paddingLeft: 5,
  },
  image: {
    height: 50,
    width: 40,
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
  actionContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingRight: 5,
    paddingLeft: 5,
  },
  input: {
    height: 30,
    width: 50,
    borderWidth: 1,
    color: colors.gray,
    borderColor: colors.gray,
    padding: 1,
    marginRight: 10,
    textAlign: 'center',
  },
});

export default styles;
