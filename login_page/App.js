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
  Switch,
} from 'react-native';
import Header from './src/components/Header';
import Input from './src/components/Input';
import Button from './src/components/Button';

const App = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled((previousState) => !previousState);
  const switchButton = (
    <View style={styles.containerSwitch}>
      <Switch
        trackColor={{false: '#767577', true: '#80cbc4'}}
        thumbColor={isEnabled ? '#546e7a' : '#80cbc4'}
        ios_backgroundColor="#3E3E3E"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>
  );
  //Icon
  const iconEnv = <Icon name="envelope" size={17} color="black" />;
  const iconpas = <Icon name="unlock-alt" size={17} color="black" />;
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const onChangeMail = (textValue) => setText(textValue);
  const onChangePas = (passwordValue) => setPassword(passwordValue);
  const go = (email) => {
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    reg.test(email) === true
      ? Alert.alert('success')
      : Alert.alert('Invalid email!');
  };

  const onLogin = (email, pass) => {
    email && pass && go(email);
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
              placeholder="Enter password..."
              keyboardType="default"
              textContentType="password"
              text={password}
              onChange={onChangePas}
              name={iconpas}
              secureTextEntry={!isEnabled}
              switchButton={switchButton}
            />
          </View>
          <Text
            style={{
              alignSelf: 'flex-end',
              color: 'white',
              fontWeight: 'bold',
              marginRight: 20,
            }}>
            Forget password?
          </Text>

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
    backgroundColor: '#80cbc4',
  },
  icon: {
    alignItems: 'center',
  },
  containerSwitch: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
