import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
const Input = ({
  placeholder,
  keyboardType,
  textContentType,
  onChange,
  text,
  name,
  secureTextEntry,
  switchButton,
}) => {
  return (
    <View style={styles.textInput}>
      {name}
      <TextInput
        style={{paddingLeft: 10, flex: 1}}
        placeholder={placeholder}
        keyboardType={keyboardType}
        textContentType={textContentType}
        value={text}
        onChangeText={onChange}
        secureTextEntry={secureTextEntry}
      />
      {switchButton}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    // flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    margin: 12,
    borderRadius: 15,
    paddingLeft: 10,
    alignItems: 'center',
    // height: 40,
    justifyContent: 'space-between',
  },
});
