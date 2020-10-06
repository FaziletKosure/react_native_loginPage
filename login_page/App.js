import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <Header />
      <Input />
      <Button />
      <Text></Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#80cbc4',
  },
});
