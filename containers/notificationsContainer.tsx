// Dependencies
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const NotificatonsContainer: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Notifications screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default NotificatonsContainer;
