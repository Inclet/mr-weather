// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import COLORS from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowSpaceBtn,
  },
  regionSelector: {
    ...commonStyles.flexRowSpaceBtn,
  },
  regionTitle: {
    fontSize: 14,
    fontWeight: '500',
    color: COLORS.primaryColor,
    ...commonStyles.mr10,
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    marginBottom: 10,
    color: COLORS.whiteColor,
  },
  date: {
    fontSize: 15,
    color: COLORS.whiteColor,
  },
});

export default styles;
