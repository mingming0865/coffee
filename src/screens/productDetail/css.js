import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  imageStyle: {
    height: 400,
    width: '100%',
    borderRadius: 10,
  },
  flexRadio: {
    flexDirection: 'row',
  },
  styleText: {
    alignSelf: 'center',
  },
  flexText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '88%',
  },
  styleButton: {
    backgroundColor: 'orange',
    width: 300,
    justifyContent: 'center',
    alignSelf: 'center',
    height: 60,
    borderRadius: 20,
  },
  alignText: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    color: 'white',
  },
  views: {
    height: 8,
    width: '100%',
    backgroundColor: '#E6E6E6',
    marginTop: 15,
    marginBottom: 15,
  },
  viewsRadio: {
    height: 2,
    width: '100%',
    backgroundColor: '#E6E6E6',
    marginTop: 7,
    marginBottom: 7,
  },
});
export default styles;
