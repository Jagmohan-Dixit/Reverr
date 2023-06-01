import { View, Text, TouchableOpacity, StyleSheet, Button } from 'react-native'
import React, { useEffect, useState } from 'react';
import { FlatList, ScrollView } from 'react-native-gesture-handler';
import { widthTodp } from '../../Global/widthHeight';
import Counter from '../components/Counter';
import auth from '@react-native-firebase/auth';

export default function Home({navigation}) {
  const [data, setData] = useState([1]);
  console.log(data);

  const handleLogout = () => {
    auth()
      .signOut()
      .then(() => {
        console.log('User logged out successfully!');
        navigation.navigate('Register');
      })
      .catch(error => {
        setErrorMessage(error.message);
      });
  }
  
  return (
    <View style={{ flex:1, backgroundColor: '#aaa', padding: widthTodp('5')}}>
        <View style={{flexDirection: 'row', justifyContent: 'space-around', marginBottom: widthTodp('3')}}>
        <Button title='Add Counter'
            onPress={() => {
              var temp = 0;
              if(data.length >= 1) temp = data[data.length-1]+1;
              else temp = 1;
              setData([...data, temp]);
            }} 
          />
          <Button title='Logout'
            onPress={() => handleLogout()} 
          />
        </View>

        <AllCounters data={data} setData={setData} />

        {/* <FlatList 
          horizontal = {false}
          showsVerticalScrollIndicator={false}
          legacyImplementation={true}
          data={data}
          renderItem={({item}) => <Counter key={item} data={data} setData={setData} />}
          keyExtractor={item => item.name}
        /> */}

    </View>
  )
}

const AllCounters = ({data, setData}) => {
  return (
        <ScrollView>
          {data.map((item) => {
            return (
              <Counter key={item} item={item} data={data} setData={setData} />
            )
          })}
        </ScrollView>
  )
}

{/* <LinearGradient  
      colors={['rgba(83,138,214,1)', 'rgba(134,231,214,1)']} 
      start={{
        x: 1,
        y: 1
      }}
      end={{
        x: 0,
        y: 0
      }}
      style={styles.box}
       > */}


