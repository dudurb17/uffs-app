import { NavigationContainer } from "@react-navigation/native"
import RootTab from "./RootTab";

const AppNavigator = () => {
  return (
    <NavigationContainer >
      <RootTab />
    </NavigationContainer>
  )
}

export default AppNavigator;