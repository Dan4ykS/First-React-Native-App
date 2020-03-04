import { StyleSheet, Dimensions } from 'react-native';

const textColor = '#fff';
const fragmentColor = 'orange';
const mainColor = '#262729';

const styles = StyleSheet.create({
  view: {
    backgroundColor: mainColor,
    height: '100%',
    alignItems: 'center',
  },
  text: {
    color: textColor,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  boldText: {
    fontFamily: 'Roboto-Bold',
  },
  boldTextItalick: {
    fontFamily: 'Roboto-BoldItalic',
  },
  navBar: {
    height: 90,
    width: '100%',
    paddingBottom: 15,
    alignItems: 'center',
    justifyContent: 'flex-end',
    backgroundColor: fragmentColor,
    marginBottom: 20,
  },
  toDoForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: 20,
    marginHorizontal: 10,
    // width: '100%'
    // width: Dimensions.get('screen').width
  },
  input: {
    width: Dimensions.get('window').width * 0.8,
    paddingHorizontal: 20,
    fontSize: 18,
    paddingVertical: 5,
    color: textColor,
    borderBottomWidth: 2,
    borderBottomColor: fragmentColor,
  },
  button: {
    backgroundColor: fragmentColor,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: textColor,
  },
  deleteBtn: {
    backgroundColor: 'red',
  },
  buttonTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  container: {
    flexDirection: 'row',
    margin: 10,
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    borderWidth: 2,
    borderColor: fragmentColor,
    borderRadius: 15,
    padding: 10,
  },
  taskText: {
    maxWidth: '80%',
  },
  taskDone: {
    color: textColor,
    fontSize: 20,
    fontWeight: '700',
    maxWidth: '55%',
    textDecorationLine: 'line-through',
    textDecorationColor: fragmentColor,
  },
  modalInput: {
    width: '80%',
  },
  btnGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  flexWrap: {
    justifyContent: 'center',
  },
  plusBtn: {
    width: '20%',
  },
  iconStyle: {
    fontSize: 20,
    color: mainColor,
  },
});

export default styles;
