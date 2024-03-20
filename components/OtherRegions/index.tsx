// Dependencies
import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

// Components
import RegionCard from './regionCard';

// Utils
import regionsValues from '../../utils/regionValues';

// Assets
import ArrowRight from '../../assets/icons/ArrowRight.svg';

// Styles
import styles from './styles';
import COLORS from '../../styles/colors';

const OtherRegions: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.title}>Other Regions</Text>
        <TouchableOpacity style={styles.daySelector}>
          <Text style={styles.day}>Today</Text>
          <ArrowRight fill={COLORS.lightGrey} />
        </TouchableOpacity>
      </View>
      {regionsValues.map(({region, unitValue, type}, index) => (
        <RegionCard
          key={index}
          region={region}
          unitValue={unitValue}
          type={type}
        />
      ))}
    </View>
  );
};

export default OtherRegions;
