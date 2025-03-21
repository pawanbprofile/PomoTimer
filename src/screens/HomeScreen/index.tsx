import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useThemeContext} from '../../context/ThemeContext';

const HomeScreen = () => {
  const navigation = useNavigation();
  const {primaryColor} = useThemeContext();
  return (
    <View style={[styles.container, {backgroundColor: primaryColor}]}>
      <Text
        style={{fontFamily: 'Ubuntu', fontSize: 24}}
        onPress={() => {
          navigation.navigate('Settings');
        }}>
        HomeScreen
      </Text>
    </View>
  );
};

export default HomeScreen;
