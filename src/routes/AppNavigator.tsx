import { NavigationContainer } from "@react-navigation/native"
import RootTab from "./RootTab";
import RootStack from "./RootStack";

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <RootStack />
    </NavigationContainer>
  )
}

export default AppNavigator;