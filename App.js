import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function ListScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Lista</Text>
      <Button title="Ver detalle" onPress={() => navigation.navigate('Detail')} />
    </View>
  );
}

function DetailScreen() {
  return (
    <View style={styles.container}>
      <Text>Detalle</Text>
    </View>
  );
}

function FavoritesScreen() {
  return (
    <View style={styles.container}>
      <Text>Favoritos</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

const Tab = createBottomTabNavigator();

function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Productos" component={ProductsStack} />
        <Tab.Screen name="Favoritos" component={FavoritesScreen} />
      </Tab.Navigator>
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