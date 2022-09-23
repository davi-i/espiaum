import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function HomeScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Espiaum</Text>
            <Button title="Iniciar jogo" onPress={() => navigation.navigate('Game')}/>
            <StatusBar style="auto" />
        </View>
    );
}

function GameScreen() {
    return (
        <View>
            <Text>It's the game!</Text>
        </View>
    )
}

export default function App() {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Game" component={GameScreen} />
        </Stack.Navigator>
    </NavigationContainer>
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
