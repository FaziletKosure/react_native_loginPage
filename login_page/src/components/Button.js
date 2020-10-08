import React from 'react';
import {TouchableOpacity, Text, StyleSheet, Dimensions} from 'react-native';

const Button = ({myTitle, myPress, login, clearTextValue, text, password}) => {
  return (
    <TouchableOpacity
      style={styles.buttonContainer}
      onPress={() => {
        login(text, password);
      }}>
      <Text style={styles.textStyle}>{myTitle}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#546e7a',
    width: Dimensions.get('window').width / 1.5,
    alignSelf: 'center',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    margin: 10,
    height: 45,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
