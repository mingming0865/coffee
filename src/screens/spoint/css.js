import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  // index
  styleHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 5,
    marginLeft: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: 'white',
    width: 60,
    height: 40,
    borderRadius: 20,
    marginLeft: 20,
  },
  button1: {
    backgroundColor: 'white',
    width: 60,
    height: 40,
    borderRadius: 20,
    marginLeft: 10,
  },
  textFont: {
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },

  // Tich Diem
  viewStyle: {
    flexDirection: 'row',
    marginTop: 10,
    marginBottom: 10,
    justifyContent: 'space-between',
  },
  touchStyle: {
    width: Dimensions.get('window').width / 2.2,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    justifyContent: 'space-around',
  },
  touchDieuKhoan: {
    width: Dimensions.get('window').width / 2.2,
    backgroundColor: 'white',
    borderRadius: 10,
    height: 80,
    justifyContent: 'space-around',
  },
});
export default styles;
