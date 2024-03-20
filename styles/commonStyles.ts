// Dependencies
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  fillAvailableSpace: {
    flex: 1,
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexRowSpaceBtn: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  flexColumnSpaceBtn: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  flexColumnCenter: {
    display: 'flex',
    justifyContent: 'center',
  },
  flexColumnCenterCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  p25: {
    padding: 25,
  },
  p30: {
    padding: 30,
  },
  pr20: {
    paddingRight: 20,
  },
  mr10: {
    marginRight: 10,
  },
  mb5: {
    marginBottom: 5,
  },
  mb15: {
    marginBottom: 15,
  },
  mb30: {
    marginBottom: 30,
  },
  mb20: {
    marginBottom: 20,
  },
  mt20: {
    marginTop: 20,
  },
});
export default styles;
