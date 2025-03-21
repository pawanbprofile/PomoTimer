import React from 'react';
import {useThemeContext} from '../context/ThemeContext';
import {StatusBar} from 'react-native';

const CustomStatusBar = () => {
  const {primaryColor, contentType} = useThemeContext();
  return <StatusBar barStyle={contentType} backgroundColor={primaryColor} />;
};

export default CustomStatusBar;
