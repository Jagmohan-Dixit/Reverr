import React, {useState} from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
import { widthTodp } from '../../Global/widthHeight';
import { useNavigation } from '@react-navigation/native';

// Initialize Firebase with your own Firebase config
const firebaseConfig = {
    apiKey: "AIzaSyDhLCXmpKUKgRizqz1C8zm569Z48vF4zzo",
    authDomain: "mydb-21ab8.firebaseapp.com",
    databaseURL: "https://mydb-21ab8-default-rtdb.firebaseio.com",
    projectId: "mydb-21ab8",
    storageBucket: "mydb-21ab8.appspot.com",
    messagingSenderId: "850639472145",
    appId: "1:850639472145:web:b1c7e6b88b9d1a052bd3b0",
    measurementId: "G-L7VXZWECQE"
};

if (!app.length) {
  app.initializeApp(firebaseConfig);
}


const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    auth().signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User logged in successfully!');
        setEmail('');
        setPassword('');
        navigation.navigate('Home');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        onChangeText={text => setEmail(text)}
        value={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        onChangeText={text => setPassword(text)}
        value={password}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('Register')} >
        <Text style={{color: '#ffffff', 
         fontSize: 16, fontWeight: 'bold', textAlign: 'center',}}>
            If Not Registered ?
        </Text>
      </TouchableOpacity>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginVertical: widthTodp('3')
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default Login;

