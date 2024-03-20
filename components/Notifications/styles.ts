// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import COLORS from '../../styles/colors';
import commonStyles from '../../styles/commonStyles';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.fillAvailableSpace,
    ...commonStyles.flexColumnCenterCenter,
  },
  emptyNotificationText: {
    ...commonStyles.mt20,
    width: '50%',
    textAlign: 'center',
    fontSize: 16,
    color: COLORS.lighterGray,
  },
});

export default styles;
