import { StyleSheet, Text, TextInput, View } from "react-native";
import SearchIcon from "../icons/SearchIcon";
import FilterIcon from "../icons/FilterIcon";
import { SIZES } from "@/constants";
import { Height, Width } from "@/constants/theme";

function SearchComponent() {
  function onChangeText(text: any) {}

  let value: any;

  return (
    <View style={styles.searchContainer}>
      <View style={styles.searchInputContainer}>
        <View style={styles.searchIcon}>
          <SearchIcon width={Width(7)} height={Width(7)}></SearchIcon>
        </View>

        <TextInput
          editable
          onChangeText={(text) => onChangeText(text)}
          value={value}
          style={styles.searchPlaceholder}
          placeholder="Find your coffee..."
        />
      </View>
      <View style={styles.searchFilter}>
        <FilterIcon width={Width(8)} height={Width(8)}></FilterIcon>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  searchContainer: {
    display: "flex",
    flexDirection: "row",
    paddingTop: Height(6),
    justifyContent:'space-between',
    gap:Width(5)
  },
  searchInputContainer: {
    flexGrow: 9,
    display: "flex",
    flexDirection: "row",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(0, 0, 0, 0.10)",
    padding: 10,
    shadowColor: "rgba(0, 0, 0, 0.05)",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    justifyContent:'space-between',
    elevation: 5,
  },
  searchIcon: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "row",
    padding:Width(1)
  },
  searchPlaceholder: {
    flexGrow: 9,
  },
  searchFilter: {
    flexGrow: 1,
    backgroundColor: "#967259",
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SearchComponent;
