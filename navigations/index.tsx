/* eslint-disable react/no-unstable-nested-components */
// Dependencies
import React from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Types
import {RootStackParamList, RootTabParamList} from '../types';

// Routes
import routes from '../routes';

// Constants
import {HOME, MAIN_TAB} from '../constants/routes';
import colors from '../constants/colors';

// Styles
import COLORS from '../styles/colors';

export const bottomTabsOptions: BottomTabNavigationOptions = {
  tabBarLabelStyle: {
    fontSize: 12,
    fontWeight: '400',
  },
  headerShown: false,
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: COLORS.background,
  },
};

export default function Navigation({
  colorScheme,
}: {
  colorScheme: ColorSchemeName;
}) {
  return (
    <NavigationContainer
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        contentStyle: {
          backgroundColor: COLORS.background,
        },
        headerStyle: {
          backgroundColor: COLORS.background,
        },
      }}
      initialRouteName={HOME}>
      <Stack.Screen
        name={MAIN_TAB}
        component={BottomTabNavigator}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

/**
 * A bottom tab navigator displays tab buttons on the bottom of the display to switch screens.
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */
const BottomTab = createBottomTabNavigator<RootTabParamList>();

function BottomTabNavigator() {
  const colorScheme = useColorScheme() || 'light';
  return (
    <BottomTab.Navigator
      initialRouteName={HOME}
      screenOptions={{
        tabBarActiveTintColor: colors[colorScheme].tint,
      }}
      sceneContainerStyle={{
        backgroundColor: COLORS.background,
        paddingTop: 10,
      }}>
      {routes.map(({name, title, component, Icon}) => (
        <BottomTab.Screen
          key={name}
          name={name}
          component={component}
          options={() => ({
            ...bottomTabsOptions,
            title,
            tabBarLabel: name,
            tabBarLabelStyle: {
              fontSize: 12,
              fontWeight: '400',
            },
            headerShown: false,
            headerShadowVisible: false,
            headerStyle: {
              backgroundColor: COLORS.background,
            },
            tabBarIcon: ({color}) => <Icon fill={color} />,
          })}
        />
      ))}
    </BottomTab.Navigator>
  );
}
