import { StatusBar } from 'expo-status-bar';
import { Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css"

export default function App() {
  return (
    <View className="pt-12 bg-fuchsia-50">
      <Text className="text-left text-xl font-bold text-sky-600 pl-5">Sub to Gigi Murin!</Text>
      <Text className="text-purple-400 text-right"
      onPress={() => Linking.openURL('https://github.com/OtterKun')}>Creator.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
