import Ionic from "react-native-vector-icons/Ionicons";
import Awesome from "react-native-vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { styles } from "./BottomTabNavigation.styles";
import { ChatStack, GroupStack } from "./BasicStacks";
import { SettingsStack } from "./BasicStacks/SettingsStack";

const Tab = createBottomTabNavigator();

export const BottomTabsNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarInactiveTintColor: "#0f1c25",
        tabBarActiveTintColor: "#fff",
        tabBarStyle: styles.tabBarStyle,
        tabBarIcon: ({ color, size }) => IconBar(route, color, size),
      })}
    >
      <Tab.Screen name="Chat" component={ChatStack} />
      <Tab.Screen name="Group" component={GroupStack} />
      <Tab.Screen name="Settings" component={SettingsStack} />
    </Tab.Navigator>
  );
};

const IconBar = (route: any, color: string, size: number) => {
  if (route.name === "Chat")
    return <Ionic name="chatbubbles-sharp" size={size} color={color} />;

  if (route.name === "Group")
    return <Awesome name="group" size={size} color={color} />;

  if (route.name === "Settings")
    return <Ionic name="settings" size={size} color={color} />;

  return <Ionic name="alert" size={size} color={color} />;
};
