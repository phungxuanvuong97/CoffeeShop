import CoffeeTypeComponent from "@/components/common/CoffeeTypeComponent";
import SearchComponent from "@/components/common/SearchComponent";
import { SIZES } from "@/constants";
import { StyleSheet, Text, View ,ScrollView} from "react-native";

function HomeScreen() {
  return (
    <ScrollView style={styles.screenContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Find the best {'\n'}Coffee to your taste</Text>
      </View>
      <SearchComponent></SearchComponent>
      <CoffeeTypeComponent></CoffeeTypeComponent>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FAF4EE",
    height: "100%",
    width: "100%",
    marginLeft:SIZES.width / 20,
    marginRight:SIZES.width / 20,
  },
  mainTextContainer:{

  },
  mainText:{
    color: "#444",
    fontSize: SIZES.mainTextSize,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 32
  }
});

export default HomeScreen;
