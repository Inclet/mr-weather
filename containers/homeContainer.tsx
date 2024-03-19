// Dependencies
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeContainer: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Home screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeContainer;
