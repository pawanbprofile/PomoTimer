import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import {useThemeContext} from 'context/ThemeContext';

const Settings = () => {
  const {primaryColor} = useThemeContext();
  return (
    <View style={[styles.container, {backgroundColor: primaryColor}]}>
      <Text>Settings</Text>
    </View>
  );
};

export default Settings;
