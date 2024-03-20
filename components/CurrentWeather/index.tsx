// Dependencies
import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';

// Styles
import styles from './styles';

// Types
type TCurrentWeatherProps = {
  measure: string;
  type: string | undefined;
  loading: boolean;
};

const CurrentWeather: React.FC<TCurrentWeatherProps> = ({
  measure = '',
  type = '',
  loading,
}) => {
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          <Text style={styles.measure}>{measure}</Text>
          <Text style={styles.type}>{type}</Text>
        </>
      )}
    </View>
  );
};

export default CurrentWeather;
