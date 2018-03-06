import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    backgroundColor: '#DDDDDD',
    marginBottom: 10,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
    flexDirection: 'row',
    alignContent: 'stretch',
  },
  option: {
    color: '#666666',
    marginHorizontal: 20,
    opacity: 0.5,
  },
  optionActive: {
    fontWeight: 'bold',
    opacity: 1,
  },
});

export default styles;
