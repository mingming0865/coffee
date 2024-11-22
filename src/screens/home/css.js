import {Dimensions, StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
  },
  textFont: {
    marginTop: 8,
    fontWeight: 'bold',
    width: 150,
  },
  styleHeader: {
    paddingTop: 10,
    flexDirection: 'row',
    width: Dimensions.get('window').width,
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
  Tab: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
  },
  Stack: {
    flex: 1,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  TitTab: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  flexButton: {
    flexDirection: 'row',
    height: 90,
    justifyContent: 'space-around',
    borderWidth: 0.5,
    borderRadius: 8,
    marginTop: 15,
    marginBottom: 15,
  },
  border: {
    borderLeftWidth: 0.5,
    marginTop: 5,
    marginBottom: 5,
  },
  borderButton: {
    backgroundColor: '#FABE96',
    alignSelf: 'center',
    borderRadius: 50,
    height: 60,
    width: 60,
  },
  swiper: {
    height: 200,
    width: 350,
    alignSelf: 'center',
  },
});
export default styles;
