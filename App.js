import React, { useState } from 'react';
import { View, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import Login from './screens/Login';
import Home from './screens/Home';
import Dashboard from './screens/Dashboard';
import Sensors from './screens/Sensors';
import Nutrients from './screens/Nutrients';
import CameraScreen from './screens/CameraScreen';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function CustomTabBarButton({ children, onPress }) {
  return (
    <TouchableOpacity
      style={styles.cameraButton}
      onPress={onPress}
    >
      {children}
    </TouchableOpacity>
  );
}

function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          height: 70,
          backgroundColor: '#fff',
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          elevation: 10,
        },
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Dashboard') iconName = 'analytics';
          else if (route.name === 'Sensors') iconName = 'hardware-chip';
          else if (route.name === 'Nutrients') iconName = 'leaf';
          else if (route.name === 'Camera') iconName = 'camera';
          return <Ionicons name={iconName} size={focused ? 28 : 24} color={focused ? '#2e7d32' : '#999'} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Dashboard" component={Dashboard} />
      
      <Tab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Ionicons name="camera" size={32} color="#fff" />
          ),
          tabBarButton: (props) => (
            <CustomTabBarButton {...props}>
              <Ionicons name="camera" size={28} color="#fff" />
            </CustomTabBarButton>
          ),
        }}
      />

      <Tab.Screen name="Sensors" component={Sensors} />
      <Tab.Screen name="Nutrients" component={Nutrients} />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  cameraButton: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2e7d32',
    width: 70,
    height: 70,
    borderRadius: 35,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
});





