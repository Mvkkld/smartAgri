// // import React from 'react';
// // import { View, Text, StyleSheet } from 'react-native';

// // export default function Home() {
// //   return (
// //     <View style={styles.container}>
// //       <Text style={styles.title}>Welcome to SmartAgri 🌿</Text>
// //     </View>
// //   );
// // }

// // const styles = StyleSheet.create({
// //   container: {
// //     flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#f5f5f5'
// //   },
// //   title: {
// //     fontSize: 24, fontWeight: 'bold', color: '#2e7d32'
// //   }
// // });




// // 1st code

import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
  const navigation = useNavigation();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Welcome to SmartAgri 🌱</Text>
      <Text style={styles.subtitle}>Hydroponic Automation, AI & IoT in One App</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Dashboard')}>
          <Ionicons name="analytics" size={30} color="#2e7d32" />
          <Text style={styles.cardText}>Dashboard</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Sensors')}>
          <Ionicons name="thermometer" size={30} color="#0277bd" />
          <Text style={styles.cardText}>Sensors</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Nutrients')}>
          <Ionicons name="leaf" size={30} color="#43a047" />
          <Text style={styles.cardText}>Nutrients</Text>
        </TouchableOpacity>

        {/* Optional more sections like Marketplace, Help, etc. */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 24,
    backgroundColor: '#f5f5f5',
    flexGrow: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
    marginBottom: 24,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 16,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    elevation: 3,
  },
  cardText: {
    fontSize: 18,
    color: '#333',
    fontWeight: '500',
  },
});


