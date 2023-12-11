import CartComponent from "@/components/common/CartComponent";
import EmptyCartComponent from "@/components/common/EmptyCartComponent";
import { SIZES } from "@/constants";
import { View } from "@gluestack-ui/themed";
import { ScrollView, StyleSheet } from "react-native";

function RenderEmptyCart({ style }: any) {
  return (
    <View style={style}>
      <EmptyCartComponent iconWidth={36} iconHeight={36}></EmptyCartComponent>
    </View>
  );
}

function CartScreen() {
  return (
    <View>
      <ScrollView style={styles.screenContainer}>
        <View style={styles.emptyCartContainer}>
          <RenderEmptyCart style={styles.emptyCartComponent}></RenderEmptyCart>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAF4EE",
    height: "100%",
    width: "100%",
  },
  emptyCartContainer: {
    marginTop: 10,
    marginRight: SIZES.width / 10,
    marginLeft: SIZES.width / 10,
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  emptyCartComponent: {
    padding: SIZES.width / 10,
  },
});

export default CartScreen;
