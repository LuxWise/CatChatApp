import { AuthStartScreen } from "../../Screens/Auth";
import { styles } from "./Styles.styles";
import { LoginScreen } from "../../Screens/Auth/LoginScreen/LoginScreen";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";

const AuthStack = createStackNavigator();

export const AuthNavigation = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
        ...styles.stackCardNavigationStyles,
        cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
      }}
    >
      <AuthStack.Screen name="AuthStart" component={AuthStartScreen} />
      <AuthStack.Screen name="LoginScreen" component={LoginScreen} />
    </AuthStack.Navigator>
  );
};
