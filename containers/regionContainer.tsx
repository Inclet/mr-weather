// Dependencies
import React from 'react';
import {ScrollView} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

// Components
import OtherRegions from '../components/OtherRegions';

// Styles
import commonStyles from '../styles/commonStyles';

const RegionContainer: React.FC = () => {
  return (
    <SafeAreaView style={commonStyles.fillAvailableSpace}>
      <ScrollView>
        <OtherRegions />
      </ScrollView>
    </SafeAreaView>
  );
};

export default RegionContainer;
