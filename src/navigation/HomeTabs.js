import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProductsStack from './ProductsStack';
import FavoritesScreen from '../screens/FavoritesScreen';

const Tab = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Productos" component={ProductsStack} />
      <Tab.Screen name="Favoritos" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}
