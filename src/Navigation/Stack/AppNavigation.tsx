import { createStackNavigator } from "@react-navigation/stack";
import { BottomTabsNavigation } from "../BottomTabs/BottomTabsNavigation";
import { CameraScreen } from "../../Screens/Global";
import { Platform } from "react-native";

const RootStack = createStackNavigator();

export const AppNavigation = () => {
  return (
    <RootStack.Navigator screenOptions={{ headerShown: false }}>
      <RootStack.Screen name="Main" component={BottomTabsNavigation} />
      <RootStack.Group
        screenOptions={{
          presentation: "modal",
          headerShown: Platform.OS == "ios" ? false : true,
        }}
      >
        <RootStack.Screen name="CameraScreen" component={CameraScreen} />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
