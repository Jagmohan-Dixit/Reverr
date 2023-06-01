import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { widthTodp } from '../../Global/widthHeight'
import { TextInput, TouchableOpacity} from 'react-native-gesture-handler';

const Counter = ({data, setData, item}) => {
    const [counterName, setCounterName] = useState("Counter")
    const [value, setValue] = useState(0);
    const [isSet, setIsSet] = useState(false);
    const [inputVal, setInputVal] = useState(0);
    const [name, setName] = useState("");
    const [isName, setIsName] = useState(false);

  return (
    <View style={{backgroundColor: 'grey', padding: widthTodp('3'), marginBottom: widthTodp('7')}}>
      <View style={{flexDirection: 'row', justifyContent: 'center',}}>
        <View style={{flexDirection: 'row', justifyContent: 'center', marginBottom: widthTodp('3'), marginLeft: 'auto'}}>
          <Text style={{color: "white", fontSize: widthTodp('7'), fontWeight: '600', textTransform: 'uppercase'}}>{counterName}</Text>
        </View>

        <View style={{marginLeft: 'auto'}}>
            <Text style={{color: "white", fontSize: widthTodp('7'), fontWeight: '600',}}
            onPress={() => {
                var index = data.indexOf(item);
                console.log(item);
                data.splice(index, 1);
                setData([...data]);
            }}>
                X
            </Text>
        </View>
      </View>
    
      <View style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 6}}>
        <Text style={{color: "black", fontSize: widthTodp('7'), fontWeight: '600',flexDirection: 'row', right: 0}}>{value}</Text>
      </View>

      <View style={{flexDirection: 'row', justifyContent: 'space-around', marginTop: widthTodp('4')}}>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 6, width: '90%'}}
         onPress={() => setValue(value-1)}>
           <Text style={{color: "black", fontSize: widthTodp('7'), fontWeight: '600'}}>
               -
            </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row', justifyContent: 'center', backgroundColor: 'white', borderRadius: 6, width: '90%'}}
          onPress={() => setValue(value+1)}>
           <Text style={{color: "black", fontSize: widthTodp('7'), fontWeight: '600'}}>
                +
            </Text>
        </TouchableOpacity>
      </View>

        <TouchableOpacity style={{marginVertical: widthTodp('5'), flexDirection: 'row', justifyContent: 'center',}}
          onPress={() => setValue(0)}>
           <View style={{width: '80%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', borderRadius: 6, padding: widthTodp('2')}}>
            <Text  style={{color: "black", fontSize: widthTodp('6'), fontWeight: '600'}}>
                Reset Counter
            </Text>
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'center',}}>
           <View style={{width: '90%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', borderRadius: 6, padding: widthTodp('2')}}>
            {!isSet ? 
            <Text style={{color: "black", fontSize: widthTodp('6'), fontWeight: '600'}}
            onPress={() => setIsSet(!isSet)}>
                Start Value
            </Text>
            :
            <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
                <TextInput keyboardType='Numeric' style={{color:"black",width: '85%', fontSize: widthTodp('5')}} value={inputVal} 
                    onChangeText={(text) => setInputVal(text)} />
                </View>
                <TouchableOpacity style={{backgroundColor: "black", left: -widthTodp('4')}}
                    onPress={() => setValue(inputVal)} >
                    <Text style={{color:"white", padding: widthTodp('2'), paddingHorizontal: widthTodp('5'), fontSize: widthTodp('5')}}
                     onPress={() => {
                        setIsSet(!isSet);
                        const val = parseInt(inputVal);
                        setValue(val);
                        setInputVal(0);
                     }}>
                        Set
                    </Text>
                </TouchableOpacity>
            </View>
            }
            </View>
        </TouchableOpacity>

        <TouchableOpacity style={{marginVertical: widthTodp('5'), flexDirection: 'row', justifyContent: 'center',}}>
           <View style={{width: '90%', backgroundColor: 'white', flexDirection: 'row', justifyContent: 'center', borderRadius: 6, padding: widthTodp('2')}}>
            {!isName ? 
            <Text style={{color: "black", fontSize: widthTodp('6'), fontWeight: '600'}}
               onPress={() => setIsName(!isName)}>
                Counter Name
            </Text>
            :
            <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center',}}>
                <TextInput style={{color:"black",width: '85%', fontSize: widthTodp('5')}} value={name} 
                    onChangeText={(text) => setName(text)} />
                </View>
                <TouchableOpacity style={{backgroundColor: "black", left: -widthTodp('4')}}>
                    <Text style={{color:"white", padding: widthTodp('2'), paddingHorizontal: widthTodp('5'), fontSize: widthTodp('5')}}
                    onPress={() => {
                        if(name !== "") setCounterName(name);
                        setName("");
                        setIsName(!isName);
                    }}>
                        Set
                    </Text>
                </TouchableOpacity>
            </View>
            }
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default Counter;