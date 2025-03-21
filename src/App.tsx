import React from 'react';
import RootNavigator from './navigation';
import {SafeAreaView} from 'react-native';
import {ThemeContextProvider} from './context/ThemeContext';
import CustomStatusBar from './components/CustomStatusBar';

const App = () => {
  return (
    <ThemeContextProvider>
      <SafeAreaView style={{flex: 1}}>
        <RootNavigator />
        <CustomStatusBar />
      </SafeAreaView>
    </ThemeContextProvider>
  );
};

export default App;
