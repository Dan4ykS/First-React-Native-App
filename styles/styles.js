import { StyleSheet, Dimensions } from 'react-native';

const THEM = {
  TEXT_COLOR: '#fff',
  FRAGMENT_COLOR: 'orange',
  MAIN_COLOR: '#262729',
};

const styles = StyleSheet.create({
  view: {
    flex: 1,
    backgroundColor: THEM.MAIN_COLOR,
  },
  text: {
    color: THEM.TEXT_COLOR,
    fontSize: 20,
    fontFamily: 'Roboto-Regular',
  },
  textHeader: {
    textAlign: 'center',
    marginBottom: 10,
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
    backgroundColor: THEM.FRAGMENT_COLOR,
    marginBottom: 20,
  },
  toDoForm: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  textInput: {
    width: '80%',
    paddingHorizontal: 5,
    fontSize: 18,
    paddingVertical: 5,
    color: THEM.TEXT_COLOR,
    borderBottomWidth: 2,
    borderBottomColor: THEM.FRAGMENT_COLOR,
  },
  button: {
    backgroundColor: THEM.FRAGMENT_COLOR,
    borderWidth: 2,
    borderRadius: 15,
    padding: 5,
    borderColor: THEM.TEXT_COLOR,
  },
  deleteBtn: {
    backgroundColor: 'red',
  },
  buttonTitle: {
    fontSize: 15,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 15,
    borderWidth: 2,
    borderColor: THEM.FRAGMENT_COLOR,
    borderRadius: 15,
    padding: 10,
    
  },
  taskText: {
    maxWidth: '80%',
  },
  btnGroup: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  centerFlexWrap: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconsStyle: {
    fontSize: 20,
    color: THEM.MAIN_COLOR,
  },
  iconInTabs: {
    marginTop: 10,
    fontSize: 30
  }
});

export { styles, THEM };
