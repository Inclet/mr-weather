// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import commonStyles from '../../styles/commonStyles';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRow,
  },
  iconContainer: {
    ...commonStyles.flexColumnCenterCenter,
    ...commonStyles.mr10,
    backgroundColor: COLORS.iconBgColor,
    width: 45,
    height: 45,
    borderRadius: 22.5,
  },
  title: {
    ...commonStyles.mb5,
    fontWeight: '500',
    fontSize: 13,
    color: COLORS.lightGrey,
  },
  unitValue: {
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
