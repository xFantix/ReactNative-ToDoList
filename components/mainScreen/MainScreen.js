import { StyleSheet, Text, View, SafeAreaView, TextInput } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { Avatar, Input } from 'react-native-elements';

const MainScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full pt-20 items-center`}>
      <Avatar
        size={124}
        rounded
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/11/21/12/42/beard-1845166_1280.jpg',
        }}
      />

      <TextInput
        placeholder="Zadanie"
        style={{
          borderWidth: 1, // size/width of the border
          borderColor: 'lightgrey', // color of the border
          paddingLeft: 10,
          height: 45,
          width: 180,
          marginTop: 30,
          borderRadius: 5,
        }}
      />
    </SafeAreaView>
  );
};

export default MainScreen;
