// Dependencies
import React from 'react';
import {Text, View} from 'react-native';

// Components
import WeatherInfo from '../WeatherInfo';

// Custom Hooks
import useWeatherData from '../../hooks/useWeatherData';

// Styles
import styles from './styles';

const MoreWeatherInfo: React.FC = () => {
  const {humidity, feels_like} = useWeatherData();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Weather Now</Text>
      <View style={styles.weatherContainer}>
        <WeatherInfo
          type="temperature"
          title="Feels like"
          value={`${feels_like}º`}
        />
        <WeatherInfo type="windSpeed" title="Wind" value="12km/h" />
      </View>
      <View style={styles.weatherContainer}>
        <WeatherInfo type="precipitation" title="Precipitation" value="79.9%" />
        <WeatherInfo type="humidity" title="Humidity" value={`${humidity}%`} />
      </View>
    </View>
  );
};

export default MoreWeatherInfo;
