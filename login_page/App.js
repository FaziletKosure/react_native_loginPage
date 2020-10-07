import React, {useState, useEffect} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  Alert,
} from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  const iconEnv = <Icon name="envelope" size={15} color="black" />;
  const iconpas = <Icon name="unlock-alt" size={15} color="black" />;
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const onChangeMail = (textValue) => setText(textValue);
  const onChangePas = (passwordValue) => setPassword(passwordValue);

  const onLogin = (email, pass) => {
    if (!email) {
      Alert.alert('Error', 'Please enter an email ', [{text: 'Ok'}], {
        cancelable: true,
      });
    } else if (!pass) {
      Alert.alert('Error', 'Please enter a password ', [{text: 'Ok'}], {
        cancelable: true,
      });
    }

    setText('');
    setPassword('');
  };
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
              onChange={onChangeMail}
              text={text}
              name={iconEnv}
            />
            <Input
              placeholder="Enter your password..."
              keyboardType="default"
              textContentType="password"
              text={password}
              onChange={onChangePas}
              name={iconpas}
            />
          </View>

          <Button
            myTitle="Login"
            text={text}
            password={password}
            login={onLogin}
          />
          <Button
            myTitle="Sign up"
            text={text}
            password={password}
            login={onLogin}
          />
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
  icon: {
    alignItems: 'center',
  },
});
