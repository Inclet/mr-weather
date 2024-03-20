// Dependencies
import React from 'react';
import {View, Text, TouchableOpacity, ActivityIndicator} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

// Assets
import ArrowRight from '../../assets/icons/ArrowRight.svg';

// Styles
import styles from './styles';
import COLORS from '../../styles/colors';

// Types
import {RootStackParamList} from '../../types';
type TAreaInfoProps = {
  areaTitle: string | undefined;
  date: string;
  loading: boolean;
};

const AreaInfo: React.FC<TAreaInfoProps> = ({
  areaTitle = '',
  date = '',
  loading,
}) => {
  const {navigate} =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator size="small" />
      ) : (
        <>
          <View>
            <Text style={styles.title}>{areaTitle}</Text>
            <Text style={styles.date}>{date}</Text>
          </View>
          <TouchableOpacity
            style={styles.regionSelector}
            onPress={() => navigate('Region')}>
            <Text style={styles.regionTitle}>More Regions</Text>
            <ArrowRight fill={COLORS.primaryColor} />
          </TouchableOpacity>
        </>
      )}
    </View>
  );
};

export default AreaInfo;
