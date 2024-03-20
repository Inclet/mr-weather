// Dependencies
import React from 'react';
import {ImageBackground, View} from 'react-native';

// Components
import AreaInfo from '../AreaInfo';
import CurrentWeather from '../CurrentWeather';

// Custom Hooks
import useWeatherData from '../../hooks/useWeatherData';

// Assets
import weather_bg from '../../assets/img/weather_bg.png';

// Styles
import styles from './styles';

const MainArea: React.FC = () => {
  const {loading, region, temp, type} = useWeatherData();
  const today = new Date().toLocaleDateString();
  return (
    <View style={styles.mainContainer}>
      <ImageBackground
        source={weather_bg}
        style={styles.container}
        resizeMode="cover">
        <AreaInfo areaTitle={region} date={today} loading={loading} />
        <CurrentWeather measure={`${temp}º`} type={type} loading={loading} />
      </ImageBackground>
    </View>
  );
};

export default MainArea;
