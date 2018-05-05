import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
  },

  containerHeader: {
    backgroundColor: '#FFF',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    paddingRight: 0,
  },

  containerLoading: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  containerList: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },

  input: {
    flexGrow: 1,
    backgroundColor: '#EEE',
    height: 30,
    fontSize: 12,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 0,
  },

  addButton: {
    padding: 10,
  },

  loading: {
    marginBottom: 10,
  },

  info: {
    margin: 10,
  },
});

export default styles;
