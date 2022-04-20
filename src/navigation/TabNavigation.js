import React, { useEffect, useState } from 'react';
import { AppState, AppStateStatus, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import ReadQrCodeScreen from '../screens/ReadQrCode/ReadQrCode.Screen';
import styles from './tabNavigation.styles';
import { StyleSheet, View } from 'react-native';
import ViewQrCodeScrren from '../screens/ViewQrCode/ViewQrcode.Screen';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarLabel: () => {
            return (
              <Text style={styles.tabBarOptionsLabelStyle}>{route.name}</Text>
            );
          },
          tabBarIcon: ({ focused }) => {
            let color = '#1E2f97';
            let iconName;

            if (route.name === 'ReadQrCode') {
              iconName = focused ? 'camera' : 'camera-outline';
            } else if (route.name === 'ViewQrCode') {
              iconName = focused ? 'clipboard-list' : 'clipboard-list-outline';
            }

            // You can return any component that you like here!
            return (
              <MaterialCommunityIcons name={iconName} size={20} color={color} />
            );
          },
          tabBarStyle: styles.tabBarOptionsStyle,
          tabBarLabelStyle: styles.tabBarOptionsLabelStyle,
          tabBarItemStyle: styles.tabBarLabelStyle,
          headerStyle: styles.headerStyle,
          headerTintColor: 'white',
        })}
      >
        <Tab.Screen name="ReadQrCode" component={ReadQrCodeScreen} />
        <Tab.Screen name="ViewQrCode" component={ViewQrCodeScrren} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigation;
