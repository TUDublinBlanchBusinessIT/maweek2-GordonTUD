import React, {useState} from 'react';
import {StyleSheet, View, Text, TextInput} from 'react-native';

const styles = StyleSheet.create({
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default function App() {
const [fullname, setFullname] = useState("Gordon Bruns");
  
  return(
    <View>
      <Text style={styles.paragraph}>Hello, World {fullname}</Text>
      <TextInput
    style={styles.input}
    placeholder="Type your name"
    value={fullname}
    onChangeText={setFullname}
    autoCapitalize="words"
  />
    </View>
  );
};
 

