import { SIZES, icons } from "@/constants";
import { HomeStackParamList } from "@/types/NavigationTypes";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function MenuItem(item: any, index: any, navigation: any) {
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetail", {
          id: item.id,
          name: item.name,
          icon: item.icon,
        });
      }}
    >
      <View style={styles.menuItem}>
        <Image
          source={icons.espresso_icon}
          resizeMode="contain"
          style={{
            width: 30,
            height: 30,
            flexGrow: 1,
          }}
        />
        <View
          style={{
            flexGrow: 4,
          }}
        >
          <Text style={styles.menuItemText}>{item.name}</Text>
        </View>
        <Image
          source={icons.left_icon}
          resizeMode="contain"
          style={{
            width: 22,
            height: 22,
            flexGrow: 1,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

function RenderMenuList() {
  const dataList = [];
  const navigation = useNavigation();

  for (let index = 0; index < 6; index++) {
    dataList.push({
      id: index,
      name: "Cachuchino" + index,
      icon: "cabuchino",
    });
  }

  return (
    <View>
      <ScrollView>
        <View style={styles.listMenuItem}>
          <FlatList
            showsHorizontalScrollIndicator={true}
            data={dataList}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item, index }) => MenuItem(item, index, navigation)}
          />
        </View>
      </ScrollView>
    </View>
  );
}

function Menu() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.mainText}>
        <Text style={{ fontSize: 30 }}>It’s Great</Text>
        <Text style={{ fontSize: 30, fontWeight: 600, color: "#B98875" }}>
          {" "}
          Day For {"\n"}
        </Text>
        <Text style={{ fontSize: 30, fontWeight: 600, color: "#B98875" }}>
          Coffee
        </Text>
      </Text>
      <RenderMenuList />
    </View>
  );
}

const gap = SIZES.width / 12;

const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor:'#FAF4EE',
    height:'100%'
  },
  mainText: {
    paddingLeft: 15,
  },

  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    margin: 15,
    gap: gap,
  },

  menuItemTextContainer: {},

  menuItemText: {
    color: "#000",
    fontWeight: '400',
    fontHeiht: 32,
    fontSize: 20,
  },

  listMenuItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default Menu;
