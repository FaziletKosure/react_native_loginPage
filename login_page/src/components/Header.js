import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>LOGIN</Text>
      <Image style={styles.img} source={require('../assets/cart.png')} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
    container:{
        flex:1,
    }
  header: {
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  img: {
    width: 300,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});
