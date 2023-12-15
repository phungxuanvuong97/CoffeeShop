import { icons } from "@/constants";
import { StyleSheet, Text } from "react-native";
import { View, Image } from "react-native";

function EmptyCartComponent({ iconWidth, iconHeight }: any) {
  return (
    <View style={styles.componentContainer}>
      <Image
        source={icons.cart_icon}
        style={{width: iconWidth, height: iconHeight}}
      ></Image>
      <Text style={styles.text}>No item in your cart</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  componentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "#4A4747",
    fontSize: 16,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 32,
  },
});

export default EmptyCartComponent;
