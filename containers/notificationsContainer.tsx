// Dependencies
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import Notifications from '../components/Notifications';

// Styles
import commonStyles from '../styles/commonStyles';

const NotificatonsContainer: React.FC = () => {
  return (
    <SafeAreaView style={commonStyles.fillAvailableSpace}>
      <Notifications />
    </SafeAreaView>
  );
};

export default NotificatonsContainer;
