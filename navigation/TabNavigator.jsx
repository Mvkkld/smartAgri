import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from '../screens/Home';
import Dashboard from '../screens/Dashboard';
import Sensors from '../screens/Sensors';
import Nutrients from '../screens/Nutrients';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Home') iconName = 'home';
            else if (route.name === 'Dashboard') iconName = 'analytics';
            else if (route.name === 'Sensors') iconName = 'hardware-chip';
            else if (route.name === 'Nutrients') iconName = 'leaf';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Dashboard" component={Dashboard} />
        <Tab.Screen name="Sensors" component={Sensors} />
        <Tab.Screen name="Nutrients" component={Nutrients} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
