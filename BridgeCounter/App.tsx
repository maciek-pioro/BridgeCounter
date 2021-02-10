import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from './components/divider'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <Text>
          Count points in one game
        </Text>
      </View>
      <Divider text='albo'/>
      <View style={styles.subContainer}>
        <Text>
          Track multiple games
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    flexShrink: 0,
  },
  lineContainer: {
    width: '100%',
    flexGrow: 0.1
  },
  subContainer: {
    flexShrink: 0,    
    flexGrow: 1,
    width: '100%',
    padding: 20
  }
});
