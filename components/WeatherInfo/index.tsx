// Dependencies
import React from 'react';
import {Text, View} from 'react-native';

// Connstants
import {
  WEATHER_TYPE_HUMIDITY,
  WEATHER_TYPE_PRECIPITATION,
  WEATHER_TYPE_TEMPERATURE,
  WEATHER_TYPE_WIND_SPEED,
} from '../../constants/temperature';

// Assets
import TemperatureIcon from '../../assets/icons/weather.svg';
import HumidityIcon from '../../assets/icons/humidity.svg';
import WindIcon from '../../assets/icons/wind.svg';
import PrecipitationIcon from '../../assets/icons/hail.svg';

// Styles
import styles from './styles';

// Types
type TWeatherInfoProps = {
  title: string;
  value: string;
  type:
    | typeof WEATHER_TYPE_HUMIDITY
    | typeof WEATHER_TYPE_PRECIPITATION
    | typeof WEATHER_TYPE_TEMPERATURE
    | typeof WEATHER_TYPE_WIND_SPEED;
};

export enum WeatherType {
  Temperature = WEATHER_TYPE_TEMPERATURE,
  Humidity = WEATHER_TYPE_HUMIDITY,
  WindSpeed = WEATHER_TYPE_WIND_SPEED,
  Precipitation = WEATHER_TYPE_PRECIPITATION,
}

export const WeatherIcons = {
  [WeatherType.Temperature]: TemperatureIcon,
  [WeatherType.Humidity]: HumidityIcon,
  [WeatherType.WindSpeed]: WindIcon,
  [WeatherType.Precipitation]: PrecipitationIcon,
};

const WeatherInfo: React.FC<TWeatherInfoProps> = ({title, value, type}) => {
  const IconComponent = WeatherIcons[type];
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <IconComponent />
      </View>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.unitValue}>{value}</Text>
      </View>
    </View>
  );
};

export default WeatherInfo;
