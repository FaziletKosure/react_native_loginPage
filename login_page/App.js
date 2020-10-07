import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : null}
        style={styles.container}>
        <ScrollView style={{flex: 1}} bounces={false}>
          <Header />
          <View style={{flex: 1}}>
            <Input
              placeholder="Enter your e-mail..."
              keyboardType="email-address"
              textContentType="emailAddress"
            />
            <Input
              placeholder="Enter your password..."
              keyboardType="default"
              textContentType="password"
            />
          </View>

          <Button myTitle="Login" />
          <Button myTitle="Sign up" />
          <Text></Text>
        </ScrollView>
      </KeyboardAvoidingView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    backgroundColor: '#80cbc4',
  },
});
