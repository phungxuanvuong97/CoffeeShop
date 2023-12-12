import { SIZES } from "@/constants";
import { FlatList, StyleSheet, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function renderType(type: any) {
  return (
    <TouchableOpacity>
      <View style={styles.itemContainer}>
        <Text style={styles.typeText}>{type}</Text>
      </View>
    </TouchableOpacity>
  );
}

function CoffeeTypeComponent() {
  const listCoffeeType = ["Cabuchino", "Latte", "Espresso", "Cafetière"];

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={listCoffeeType}
        renderItem={({ item, index }) => renderType(item)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    justifyContent:'space-between',
    marginTop:(SIZES.height *1) / 100
  },
  itemContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:(SIZES.width *2) / 100
  },
  typeText:{
    color: "#967259",
    fontSize: (SIZES.width *5) / 100,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: (SIZES.height *3) / 100
  }
});

export default CoffeeTypeComponent;
