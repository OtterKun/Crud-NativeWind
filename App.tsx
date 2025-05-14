import { StatusBar } from 'expo-status-bar';
import { Linking } from 'react-native';
import { StyleSheet, Text, View } from 'react-native';
import "./global.css";
import { Card } from "./components/card.tsx";

export default function App() {
  return (
    <View className="pt-12 bg-fuchsia-50 p-2">
      <Text className="text-left text-xl font-bold text-sky-600 pl-5">Sub to Gigi Murin!</Text>
      <Text className="text-purple-400 text-right pr-2"
      onPress={() => Linking.openURL('https://github.com/OtterKun')}>Creator.</Text>
      <Card className="rounded-xl border-4 border-amber-300 bg-fuchsia-50 overflow-hidden h-32" />
      <Card className="rounded-xl border-4 border-amber-300 bg-fuchsia-50 overflow-hidden h-32" />
    </View>
  );
}

