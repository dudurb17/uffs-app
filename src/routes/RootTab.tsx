import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

import FontAwesome from '@expo/vector-icons/FontAwesome';
import User from '../screens/User';

const Tab = createBottomTabNavigator();

function RootTab() {
  return (
    <Tab.Navigator screenOptions={{ tabBarStyle: { backgroundColor: '#026534', borderTopLeftRadius:25, borderTopRightRadius: 25 }, tabBarActiveTintColor: 'white',
     tabBarShowLabel: false, headerShown: false, tabBarIconStyle: { marginTop: 10 } }}>
      <Tab.Screen name="Home" options={{ tabBarIcon: ({color, focused}) => <FontAwesome name="home" size={ focused ? 30 : 25} color={color} /> }} component={Home} />
      <Tab.Screen name="Cart" options={{ tabBarIcon: ({color, focused}) => <FontAwesome name="shopping-cart" size={ focused ? 30 : 25} color={color} /> }} component={Cart} />
      <Tab.Screen name="User" options={{ tabBarIcon: ({color, focused}) => <FontAwesome name="user" size={ focused ? 30 : 25} color={color} /> }} component={User} />
    </Tab.Navigator>
  );
}

export default RootTab;