import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View>
      <Text style={styles.header}>LOGIN</Text>
      <Image style={styles.img} source={require('../assets/cart.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    flex: 1,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: 200,
    resizeMode: 'contain',
    margin: -120,
    alignSelf: 'center',
  },
});
