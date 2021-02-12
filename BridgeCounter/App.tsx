import React, { ReactElement } from 'react';
import { StyleSheet, View } from 'react-native';
import * as eva from '@eva-design/eva';
import {
  ApplicationProvider,
  Text,
  Button,
  Card,
  IconRegistry,
  Icon,
} from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import { Divider } from './src/components/divider';


export default function App(): ReactElement {
  return (
    <>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={eva.light}>
        <View style={styles.container}>
          <View style={styles.subContainer}>
            <Icon style={styles.icon} name="calendar-outline" fill="rgba(200, 200, 200, 0.7)"/>
            <Text>Track multiple games</Text>
          </View>
          <Divider text="albo" />
          <View style={styles.subContainer}>
          </View>
        </View>
      </ApplicationProvider>
    </>
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
    flexGrow: 0.1,
  },
  subContainer: {
    flexShrink: 1,
    flexGrow: 1,
    flexBasis: 1,
    width: '100%',
    padding: 20,
    margin: 20,
    borderColor: 'red',
    borderWidth: 1
  },
  icon: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
