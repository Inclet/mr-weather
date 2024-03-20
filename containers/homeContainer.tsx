// Dependencies
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import MainArea from '../components/MainArea';
import MoreWeatherInfo from '../components/MoreWeatherInfo';

// Styles
import commonStyles from '../styles/commonStyles';

const HomeContainer: React.FC = () => {
  return (
    <SafeAreaView style={commonStyles.fillAvailableSpace}>
      <ScrollView contentContainerStyle={commonStyles.fillAvailableSpace}>
        <MainArea />
        <MoreWeatherInfo />
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeContainer;
