import { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Avatar, Input } from 'react-native-elements';
import Checkbox from 'expo-checkbox';

const MainScreen = () => {
  const [valueChecbox, setValueChecbox] = useState(false);
  const [inputValue, setInputValue] = useState('');

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{ alignSelf: 'center', paddingTop: 60 }}>
        <Avatar
          size={124}
          rounded
          source={{
            uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
          }}
        />
      </View>
      <Text
        style={{
          alignSelf: 'center',
          fontSize: 20,
        }}
      >
        Jan Kowalski
      </Text>
      <View
        style={{
          flexDirection: 'row',
          height: 50,
          marginTop: 20,
          alignItems: 'center',
          marginHorizontal: 10,
          paddingHorizontal: 10,
          borderRadius: 10,
          backgroundColor: '#e8e5e5',
        }}
      >
        <TextInput
          onChangeText={setInputValue}
          value={inputValue}
          style={{ width: '100%' }}
          placeholder="Dodaj Zadanie"
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: 20,
          justifyContent: 'center',
          marginTop: 10,
        }}
      >
        <Checkbox
          value={valueChecbox}
          onValueChange={setValueChecbox}
          style={{ alignSelf: 'center' }}
          color={'red'}
        />
        <Text style={{ margin: 8 }}>Ważne</Text>
      </View>
      <TouchableOpacity
        style={{
          alignItems: 'center',
          backgroundColor: '#DDDDDD',
          padding: 10,
          marginHorizontal: 50,
          borderRadius: 5,
        }}
      >
        <Text>Dodaj</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MainScreen;
