import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
    <View style={styles.container}>
      <Ionicons name="search" style={styles.icon} />
      <TextInput
        style={styles.input}
        placeholder="Search Products..."
        value={searchQuery}
        onChangeText={setSearchQuery}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 10,
    marginBottom: 20,
  },
  icon: {
    fontSize: 20,
    color: '#888',
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
});

export default SearchBar;
