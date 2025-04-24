import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const sensorData = [
  { label: 'pH', value: '6.3', icon: 'water', bg: '#e8f5e9', color: '#2e7d32' },
  { label: 'EC', value: '1.9 mS/cm', icon: 'speedometer', bg: '#ede7f6', color: '#7e57c2' },
  { label: 'Temp', value: '23°C', icon: 'thermometer', bg: '#e3f2fd', color: '#0288d1' },
  { label: 'Humidity', value: '72%', icon: 'cloudy-outline', bg: '#f1f8e9', color: '#558b2f' },
  { label: 'CO₂', value: '420 ppm', icon: 'leaf', bg: '#fff3e0', color: '#ef6c00' },
  { label: 'Light', value: '850 lux', icon: 'sunny', bg: '#fffde7', color: '#fbc02d' },
];

export default function Sensors() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Live Sensor Readings</Text>

      <View style={styles.grid}>
        {sensorData.map((sensor, index) => (
          <View key={index} style={[styles.card, { backgroundColor: sensor.bg }]}>
            <Ionicons name={sensor.icon} size={26} color={sensor.color} />
            <Text style={styles.label}>{sensor.label}</Text>
            <Text style={styles.value}>{sensor.value}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2e7d32',
    textAlign: 'center',
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 2,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
});
