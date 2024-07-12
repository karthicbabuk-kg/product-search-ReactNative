import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import ProductListScreen from './src/components/ProductListScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <ProductListScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
    paddingTop: 40,
  },
});
