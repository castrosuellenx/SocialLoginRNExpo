import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useTheme } from 'styled-components/native';

import SignIn from '@/screens/SignIn';
import Profile from '@/screens/Profile';
import { RFValue } from 'react-native-responsive-fontsize';

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace ReactNavigation {
    interface RootParamList {
      SignIn: undefined;
      Profile: undefined;
    }
  }
}

const Stack = createNativeStackNavigator();

const Routes: React.FC = () => {
  const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          options={{ title: 'Login' }}
        />
        <Stack.Screen name="Profile" component={Profile} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
