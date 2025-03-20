import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';

type RootStackProps = {
  Home: undefined;
  Settings: undefined;
};

const RootStackNavigator = createNativeStackNavigator<RootStackProps>();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator screenOptions={{headerShown: false}}>
        <RootStackNavigator.Screen name={'Settings'} component={Settings} />
        <RootStackNavigator.Screen name={'Home'} component={HomeScreen} />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
