import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
  text: string
}

export const Divider = ({text} : Props) => (
  <View style={styles.container}>
    <View style={styles.dividerPart} />
    <View>
      <Text style={styles.text}>
        {text}
      </Text>
    </View>
    <View style={styles.dividerPart} />
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 5,
    width: '100%'
  },
  dividerPart: { flex: 1, height: 1, backgroundColor: 'rgba(0, 0, 0, 0.2)' },
  text: { width: 50, textAlign: 'center', color: 'rgba(0, 0, 0, 0.5)' }
});
