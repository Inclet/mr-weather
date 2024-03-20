// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import commonStyles from '../../styles/commonStyles';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.p30,
  },
  headerContainer: {
    ...commonStyles.flexRowSpaceBtn,
    ...commonStyles.mb30,
  },
  regionCardContainer: {
    ...commonStyles.p25,
    ...commonStyles.flexRowSpaceBtn,
    ...commonStyles.mb20,
    borderWidth: 1,
    borderColor: COLORS.lightGrey,
    borderRadius: 5,
  },
  daySelector: {
    ...commonStyles.flexRow,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
  },
  day: {
    fontSize: 16,
    color: COLORS.lightGrey,
    fontWeight: '500',
    ...commonStyles.mr10,
  },
  region: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default styles;
