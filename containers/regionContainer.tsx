// Dependencies
import React from 'react';
import {Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const RegionContainer: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text>Regions screen</Text>
      </View>
    </SafeAreaView>
  );
};

export default RegionContainer;
