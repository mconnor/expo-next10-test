// @generated: @expo/next-adapter@2.1.41
import React from 'react';
import Link from 'next/link'
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to Expo + Next.js 👋</Text>
      <Link href='./'>go home </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
