import { SIZES } from "@/constants";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function RenderItemList() {
  const listCoffeeType = ["Cabuchino", "Latte", "Espresso", "Cafetière"];

  const listItem : any[] = [];

  listCoffeeType.forEach((element) => {
    listItem.push(
      <TouchableOpacity>
        <View style={styles.itemContainer}>
          <Text style={styles.typeText}>{element}</Text>
        </View>
      </TouchableOpacity>
    );
  });

  return listItem;
}

function CoffeeTypeComponent() {
  return <View style={styles.container}>
    <RenderItemList></RenderItemList>
  </View>;
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: (SIZES.height * 1) / 100,
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: (SIZES.width * 2) / 100,
  },
  typeText: {
    color: "#967259",
    fontSize: (SIZES.width * 5) / 100,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: (SIZES.height * 3) / 100,
  },
});

export default CoffeeTypeComponent;
