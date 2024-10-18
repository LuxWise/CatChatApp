import { createStackNavigator } from "@react-navigation/stack";
import { GroupScreen } from "../../../Screens/Groups";
import { styles } from "./Styles.styles";

const Stack = createStackNavigator();

export const GroupStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
      }}
    >
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
    </Stack.Navigator>
  );
};
