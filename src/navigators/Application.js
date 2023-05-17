import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { SafeAreaView, StatusBar } from 'react-native';

import Home from '../screens/Home';
import MainNavigator from './Main';
import React from 'react';
import { Startup } from '../screens';
import Welcome from './Welcome';
import { createStackNavigator } from '@react-navigation/stack';
import { useFlipper } from '@react-navigation/devtools';
import { useTheme } from '../hooks';

const Stack = createStackNavigator();
// @refresh reset
const ApplicationNavigator = () => {
  const { Layout, darkMode, NavigationTheme } = useTheme();
  const { colors } = NavigationTheme;
  const navigationRef = useNavigationContainerRef();
  useFlipper(navigationRef);
  return (
    <SafeAreaView style={[Layout.fill, { backgroundColor: colors.card }]}>
      <NavigationContainer theme={NavigationTheme} ref={navigationRef}>
        <StatusBar barStyle={darkMode ? 'light-content' : 'dark-content'} />
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};
export default ApplicationNavigator;
