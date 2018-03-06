import { StyleSheet } from 'react-native';
import { colors, fonts } from 'styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 10,
    marginBottom: 10,
    marginHorizontal: 10,
    borderRadius: 5,
    elevation: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    borderRadius: 100,
  },

  title: {
    fontSize: fonts.regular,
    fontWeight: 'bold',
    color: colors.primary,
  },

  containerInfo: {
    marginHorizontal: 10,
    flex: 1,
  },

  login: {
    color: colors.dark,
  },

  icon: {
    marginLeft: 'auto',
    marginRight: 10,
  },
});

export default styles;
