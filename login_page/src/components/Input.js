import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
// import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Input = ({
  placeholder,
  keyboardType,
  textContentType,
  onChange,
  text,
  name,
}) => {
  return (
    <View style={styles.textInput}>
      {name}
      <TextInput
        style={{paddingLeft: 10}}
        placeholder={placeholder}
        keyboardType={keyboardType}
        textContentType={textContentType}
        value={text}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 10,
    borderRadius: 10,
    padding: 6,
    alignItems: 'center',
  },
});
