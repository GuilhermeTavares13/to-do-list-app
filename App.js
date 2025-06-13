import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  let list = []
  const [item,setItem] = useState('');

  return (
    <View style={styles.container}>
    <TextInput style={styles.textInput} /><Button title='Add'></Button>
      <ScrollView>
          {list.map((itemList, index) => {
            <View key={index}>
              <Text>{itemList}</Text>
            </View>
          })}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textInput: {
    borderBottomColor: 'black',
    borderWidth: 1,
    width: '80%',
  }
});
