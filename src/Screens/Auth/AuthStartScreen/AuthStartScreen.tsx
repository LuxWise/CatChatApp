import { TouchableOpacity } from "react-native";
import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./AuthStartScreen.styles";
import { assets } from "../../../../assets";

export const AuthStartScreen = ({ navigation }: any) => {
  const goToLogin = () => {
    navigation.navigate("LoginScreen");
  };

  return (
    <SafeAreaView style={styles.content}>
      <Image source={assets.image.png.auth01} style={styles.image} />
      <View style={styles.textContent}>
        <Text style={styles.tittle}>Welcome to CatChat</Text>
        <Text style={styles.text}>
          We recommend using this service with responsibility to enjoy the
          service
        </Text>
        <Text style={styles.text}>Consult our Privacy Policy Press</Text>
        <TouchableOpacity style={styles.button} onPress={goToLogin}>
          <Text style={styles.buttonText}>r eu ready?</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};
