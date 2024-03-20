// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import COLORS from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRow,
  },
  measure: {
    fontSize: 80,
    fontWeight: '600',
    color: COLORS.whiteColor,
    ...commonStyles.mr10,
  },
  type: {
    fontSize: 17,
    textTransform: 'capitalize',
    fontWeight: '500',
    color: COLORS.whiteColor,
  },
});

export default styles;
