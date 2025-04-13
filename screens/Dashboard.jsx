// import React from 'react';
// import { View, Text } from 'react-native';

// export default function Dashboard() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Dashboard Screen</Text>
//     </View>
//   );
// }



// 1st code 

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Dashboard() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Dashboard Overview</Text>

      <View style={styles.grid}>
        <View style={[styles.card, { backgroundColor: '#e8f5e9' }]}>
          <Ionicons name="water" size={28} color="#2e7d32" />
          <Text style={styles.label}>pH Level</Text>
          <Text style={styles.value}>6.2</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#e3f2fd' }]}>
          <Ionicons name="sunny" size={28} color="#0277bd" />
          <Text style={styles.label}>Temperature</Text>
          <Text style={styles.value}>24°C</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#f1f8e9' }]}>
          <Ionicons name="cloudy-outline" size={28} color="#558b2f" />
          <Text style={styles.label}>Humidity</Text>
          <Text style={styles.value}>68%</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#ede7f6' }]}>
          <Ionicons name="speedometer" size={28} color="#7e57c2" />
          <Text style={styles.label}>EC Level</Text>
          <Text style={styles.value}>1.8 mS/cm</Text>
        </View>
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
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 24,
    textAlign: 'center',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  card: {
    width: '47%',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 20,
    alignItems: 'center',
    elevation: 3,
  },
  label: {
    fontSize: 14,
    color: '#333',
    marginTop: 8,
  },
  value: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 4,
  },
});
