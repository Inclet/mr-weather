// Dependencies
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

// Styles
import styles from './styles';

// Types
type TRegionCardProps = {
  region: string;
  unitValue: string;
  type: string;
};

const RegionCard: React.FC<TRegionCardProps> = ({region, unitValue, type}) => {
  return (
    <TouchableOpacity style={styles.regionCardContainer}>
      <Text style={styles.region}>{region}</Text>
      <Text style={styles.region}>{unitValue}</Text>
      <Text style={styles.region}>{type}</Text>
    </TouchableOpacity>
  );
};

export default RegionCard;
