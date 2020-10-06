import React from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = () => {
  return (
    <View>
      <TextInput placeholder="Enter your Email" />
      <TextInput placeholder="Enter your password" />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
    email:{
        backgroundColor:'white',
      borderWidth:1,
});
