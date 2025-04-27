import React, { useEffect, useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Camera } from 'expo-camera';

export default function CameraScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [cameraType, setCameraType] = useState(null); // initially null
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
      const { status } = await Camera.requestCameraPermissionsAsync();
      setHasPermission(status === 'granted');
      if (status === 'granted') {
        setCameraType(Camera.Constants.Type.back); // tab set karo jab permission mil jaye
      }
    })();
  }, []);

  if (hasPermission === null) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Requesting for camera permission...</Text>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.permissionContainer}>
        <Text>No access to camera</Text>
      </View>
    );
  }

  if (!cameraType) {
    return (
      <View style={styles.permissionContainer}>
        <Text>Loading camera...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Camera 
        style={styles.camera} 
        type={cameraType}
        ref={cameraRef}
      >
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => {
              setCameraType(prevType =>
                prevType === Camera.Constants.Type.back
                  ? Camera.Constants.Type.front
                  : Camera.Constants.Type.back
              );
            }}
          >
            <Text style={styles.text}> Flip </Text>
          </TouchableOpacity>
        </View>
      </Camera>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  permissionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    margin: 20,
    alignItems: 'flex-end',
  },
  button: {
    flex: 1,
    alignSelf: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#00000080',
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 18,
    color: 'white',
  },
});




