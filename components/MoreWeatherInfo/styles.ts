// Dependencies
import {StyleSheet} from 'react-native';

// Styles
import commonStyles from '../../styles/commonStyles';
import COLORS from '../../styles/colors';

const styles = StyleSheet.create({
  container: {
    ...commonStyles.p30,
    backgroundColor: COLORS.whiteColor,
    height: '30%',
  },
  title: {
    fontSize: 18,
    fontWeight: '500',
    ...commonStyles.mb20,
  },
  weatherContainer: {
    ...commonStyles.flexRowSpaceBtn,
    ...commonStyles.pr20,
    ...commonStyles.mb30,
  },
});

export default styles;
