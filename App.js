import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import HomeTabs from './src/navigation/HomeTabs';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Inicio" component={HomeTabs} />
      </Drawer.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
