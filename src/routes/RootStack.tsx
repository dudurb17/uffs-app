import { createNativeStackNavigator } from "@react-navigation/native-stack";
import DetalheComercio from "../screens/DetalheComercio";
import { RootStackParamList } from "./types/NavigatorType";
import RootTab from "./RootTab";
import InfoComercio from "../screens/InfoComercio";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootStack = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen name="Main" options={{ headerShown: false }} component={RootTab} />
      <Stack.Screen
        name="DetalheComercio"
        options={{ headerShown: false }}
        component={DetalheComercio}
      />
       <Stack.Screen
        name="InfoComercio"
        options={{ headerShown: false }}
        component={InfoComercio}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
