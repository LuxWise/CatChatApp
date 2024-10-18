import { createStackNavigator } from "@react-navigation/stack";
import { styles } from "./Styles.styles";
import { ChatsScreen } from "../../../Screens/Chats";

const Stack = createStackNavigator();

export const ChatStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        ...styles.stackCardNavigationStyles,
      }}
    >
      <Stack.Screen name="ChatScreen" component={ChatsScreen} />
    </Stack.Navigator>
  );
};
