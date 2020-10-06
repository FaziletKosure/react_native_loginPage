import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';

const Input = ({placeholder, keyboardType, textContentType}) => {
  const [text, setText] = useState('');
  const onChange = (textValue) => setText(textValue);
  return (
    <View style={styles.input}>
      <TextInput
        style={styles.textInput}
        placeholder={placeholder}
        // value={text}
        keyboardType={keyboardType}
        textContentType={textContentType}
        value={text}
        // autoFocus={true}
        onChangeText={onChange}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  textInput: {
    // flex: 1,
    backgroundColor: 'white',
    margin: 20,
    borderRadius: 10,
    padding: 10,
  },
});
