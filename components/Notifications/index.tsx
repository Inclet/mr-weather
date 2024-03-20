// Dependencies
import React from 'react';
import {Text, View} from 'react-native';

// Assets
import EmptyNotifications from '../../assets/icons/EmptyNotifications.svg';

// Styles
import styles from './styles';

const Notifications: React.FC = () => {
  return (
    <View style={styles.container}>
      <EmptyNotifications />
      <Text style={styles.emptyNotificationText}>
        Your Notifications will be displayed here
      </Text>
    </View>
  );
};

export default Notifications;
