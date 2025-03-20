import React from 'react';
import {useThemeContext} from '../context/ThemeContext';
import {StatusBar} from 'react-native';

const CustomStatusBar = () => {
  const {primaryColor} = useThemeContext();
  return (
    <StatusBar barStyle={'light-content'} backgroundColor={primaryColor} />
  );
};

export default CustomStatusBar;
