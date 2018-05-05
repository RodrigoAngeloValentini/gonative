/*eslint-disable*/
import { StyleSheet } from 'react-native';
import { colors } from 'styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  marker: {
    height: 32,
    width: 32,
    borderRadius: 32,
    borderWidth: 5,
    borderColor: colors.white,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
  },
  modalBox: {
    padding: 20,
    backgroundColor: colors.white,
    marginRight: 20,
    marginLeft: 20,
    borderRadius: 5,
  },
  title: {
    fontSize: 18,
    color: colors.lightBlack,
  },
  input: {
    marginTop: 20,
    height: 40,
    borderRadius: 5,
    paddingLeft: 5,
    borderWidth: 1,
    borderColor: colors.gray,
  },
  buttonContainer: {
    flexDirection: 'row',
    flexWrap: 'nowrap',
    alignContent: 'stretch',
  },
  buttonCancel: {
    marginTop: 10,
    backgroundColor: colors.lightGray,
    padding: 10,
    borderRadius: 5,
    height: 42,
    flexGrow: 1,
    marginRight: 15,
  },
  buttonSave: {
    marginTop: 10,
    backgroundColor: colors.green,
    padding: 10,
    borderRadius: 5,
    height: 42,
    flexGrow: 1,
  },
  buttonText: {
    color: colors.white,
    alignSelf: 'center',
  },
});

export default styles;
