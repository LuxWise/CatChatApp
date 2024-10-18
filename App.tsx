import { NavigationContainer } from "@react-navigation/native";
import "./src/gesture-handler";
import { Handlenavigation } from "./src/Navigation/HandleNavigation";

export default function App() {
  return (
    <NavigationContainer>
      <Handlenavigation />
    </NavigationContainer>
  );
}
