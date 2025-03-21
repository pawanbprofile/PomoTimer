import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';
import {useThemeContext} from 'context/ThemeContext';
import {NavigationAction} from '@react-navigation/native';

type LeftArrowProps = {
  action: () => void;
};
const LeftArrow = ({action}: LeftArrowProps) => {
  const {actionColor} = useThemeContext();
  return (
    <TouchableOpacity onPress={() => action()}>
      <Icon name={'left'} size={20} color={actionColor} />
    </TouchableOpacity>
  );
};

export default LeftArrow;
