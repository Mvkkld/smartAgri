// import React from 'react';
// import { View, Text } from 'react-native';

// export default function Nutrients() {
//   return (
//     <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
//       <Text>Nutrients Screen</Text>
//     </View>
//   );
// }


// 1st code 

import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function Nutrients() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}>Nutrient Overview</Text>

      <View style={styles.cardRow}>
        <View style={[styles.card, { backgroundColor: '#e8f5e9' }]}>
          <Ionicons name="water" size={26} color="#2e7d32" />
          <Text style={styles.label}>EC Level</Text>
          <Text style={styles.value}>1.8 mS/cm</Text>
        </View>

        <View style={[styles.card, { backgroundColor: '#e3f2fd' }]}>
          <Ionicons name="flask" size={26} color="#0277bd" />
          <Text style={styles.label}>pH Level</Text>
          <Text style={styles.value}>6.1</Text>
        </View>
      </View>

      <View style={styles.aiCard}>
        <Ionicons name="bulb" size={26} color="#388e3c" />
        <View style={{ marginLeft: 16 }}>
          <Text style={styles.aiTitle}>AI Recommendation</Text>
          <Text style={styles.aiText}>Add 5ml Grow Nutrient + Adjust pH to 6.2</Text>
        </View>
      </View>

      <Text style={styles.subHeader}>Feeding Schedule</Text>

      <View style={styles.schedule}>
        <Text style={styles.scheduleItem}>🌱 Morning – 7:00 AM → 10ml Grow A + 5ml CalMag</Text>
        <Text style={styles.scheduleItem}>🌞 Noon – 12:00 PM → 5ml Micro + pH check</Text>
        <Text style={styles.scheduleItem}>🌙 Evening – 6:00 PM → 10ml Bloom Nutrient</Text>
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
    marginBottom: 20,
    textAlign: 'center',
  },
  cardRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 24,
  },
  card: {
    width: '47%',
    borderRadius: 16,
    padding: 16,
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
  aiCard: {
    flexDirection: 'row',
    backgroundColor: '#f1f8e9',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 24,
    elevation: 2,
  },
  aiTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#388e3c',
    marginBottom: 4,
  },
  aiText: {
    fontSize: 14,
    color: '#333',
  },
  subHeader: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 12,
  },
  schedule: {
    backgroundColor: '#ffffff',
    padding: 16,
    borderRadius: 12,
    elevation: 1,
    gap: 8,
  },
  scheduleItem: {
    fontSize: 14,
    color: '#333',
  },
});
