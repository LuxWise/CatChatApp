import { createStackNavigator } from "@react-navigation/stack";
import { SettingsScreen } from "../../../Screens/Settings";
import { styles } from "./Styles.styles";

const Stack = createStackNavigator();

export const SettingsStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
      }}
    >
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
    </Stack.Navigator>
  );
};
