import Ionic from "react-native-vector-icons/Entypo";
import { View, Text, TouchableHighlight } from "react-native";
import { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { styles } from "./ChatsScreen.styles";

export const ChatsScreen = ({ navigation }: any) => {
  const navigator = useNavigation();
  useEffect(() => {
    navigator.setOptions({
      headerRight: () => (
        <TouchableHighlight style={styles.headerRight}>
          <Ionic name="plus" size={20} />
        </TouchableHighlight>
      ),
    });
  });
  return (
    <View>
      <Text onPress={() => navigation.navigate("CameraScreen")}>
        ChatScreen
      </Text>
    </View>
  );
};
