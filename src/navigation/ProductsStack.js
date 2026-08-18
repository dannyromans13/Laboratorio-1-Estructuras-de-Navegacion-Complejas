import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ListScreen from '../screens/ListScreen';
import DetailScreen from '../screens/DetailScreen';

const Stack = createNativeStackNavigator();

export default function ProductsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="List" component={ListScreen} />
      <Stack.Screen name="Detail" component={DetailScreen} />
    </Stack.Navigator>
  );
}
