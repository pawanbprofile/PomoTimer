import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import Settings from '../screens/Settings';
import {useThemeContext} from '../context/ThemeContext';
import LeftArrow from 'components/LeftArrow';

type RootStackProps = {
  Home: undefined;
  Settings: undefined;
};

const RootStackNavigator = createNativeStackNavigator<RootStackProps>();

const RootNavigator = () => {
  const {primaryColor, actionColor} = useThemeContext();

  return (
    <NavigationContainer>
      <RootStackNavigator.Navigator>
        <RootStackNavigator.Screen
          options={{headerShown: false}}
          name={'Home'}
          component={HomeScreen}
        />
        <RootStackNavigator.Screen
          name={'Settings'}
          component={Settings}
          options={({navigation}) => ({
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: primaryColor,
            },
            animation: 'fade',
            // eslint-disable-next-line react/no-unstable-nested-components
            headerLeft: () => <LeftArrow action={() => navigation.goBack()} />,
            headerTitleAlign: 'center',
            headerTintColor: actionColor,
            headerTitleStyle: {fontSize: 20, fontFamily: 'Ubuntu'},
          })}
        />
      </RootStackNavigator.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
