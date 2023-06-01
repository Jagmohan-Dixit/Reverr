import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import app from '@react-native-firebase/app';
import auth from '@react-native-firebase/auth';
// import { useGlobalContext } from '../../Context/GlobalContext';
import { useNavigation } from '@react-navigation/native';
import { widthTodp } from '../../Global/widthHeight';

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

const RegisterScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigation();

  const handleRegister = () => {
    console.log(email+" "+password)
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User registered successfully!');
        setEmail('');
        setPassword('');
        navigation.navigate('Login');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={text => setEmail(text)}
          value={email}
          autoCapitalize="none"
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          onChangeText={text => setPassword(text)}
          value={password}
          autoCapitalize="none"
        />
      </View>
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Register</Text>
      </TouchableOpacity>
      {errorMessage ? <Text style={styles.error}>{errorMessage}</Text> : null}

      <TouchableOpacity style={styles.button}
       onPress={() => navigation.navigate('Login')} >
        <Text style={{color: '#ffffff', 
         fontSize: 16, fontWeight: 'bold', textAlign: 'center',}}>
            If Already Registered ?
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
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333333',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 12,
  },
  input: {
    width: '100%',
    height: 40,
    borderColor: '#cccccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: '#ffffff',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    // width: '100%',
    marginVertical: widthTodp('5')
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});

export default RegisterScreen;



// const checking = ({email, password}) => {
//     auth().createUserWithEmailAndPassword(email, password)
//    .then((result) => {
//      console.log(result);
//      console.log('User account created & signed in!');
//      return result;
//    })
//    .catch(error => {
//      if (error.code === 'auth/email-already-in-use') {
//        console.log('That email address is already in use!');
//      }
 
//      if (error.code === 'auth/invalid-email') {
//        console.log('That email address is invalid!');
//      }
//      console.error(error);
//    });
//  }
 
 