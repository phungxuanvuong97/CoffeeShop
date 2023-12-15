import LatteIcon from "@/components/icons/LatteIcon";
import { SIZES, icons } from "@/constants";
import { Height, Width } from "@/constants/theme";
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
  const itemLocal = item;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("ProductDetail", {
          id: index,
          title: item.name,
        });
      }}
    >
      <View style={styles.menuItem}>
        <LatteIcon width={Width(8)} height={Width(8)} style={styles.menuItemIcon}></LatteIcon>
        <View style={styles.menuItemTextContainer}>
          <Text style={styles.menuItemText}>{item.name}</Text>
        </View>
        <Image
          source={icons.left_icon}
          resizeMode="contain"
          style={{
            width: Width(8),
            height: Width(8),
            flexGrow: 1,
          }}
        />
      </View>
    </TouchableOpacity>
  );
}

function getIconComponent(icon: any){
  switch(icon){
    case 'latte':{
      return <LatteIcon width={Width(12)} height={Width(12)} style={styles.menuItemIcon}></LatteIcon>
    }
  }
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

function MenuScreen() {
  return (
    <View style={styles.screenContainer}>
      <Text style={styles.mainText}>
        <Text style={{ fontSize: Width(8) }}>It’s Great</Text>
        <Text style={{ fontSize: Width(8), fontWeight: 600, color: "#B98875" }}>
          {" "}
          Day For {"\n"}
        </Text>
        <Text style={{ fontSize: Width(8), fontWeight: 600, color: "#B98875" }}>
          Coffee
        </Text>
      </Text>
      <RenderMenuList />
    </View>
  );
}


const styles = StyleSheet.create({
  screenContainer: {
    display: "flex",
    flexDirection: "column",
    backgroundColor:'#FAF4EE',
    height:'100%'
  },
  mainText: {
    paddingLeft: 12,
  },

  menuItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: 'space-between',
    paddingLeft: Width(6),
    paddingRight: Width(6),
    paddingBottom: Height(2),
    paddingTop: Height(2)
  },

  menuItemIcon:{
    flexGrow:1
  },

  menuItemTextContainer: {
    flexGrow:8,
    alignItems:'flex-start',
    paddingLeft:Width(10)
  },

  menuItemLeftIcon:{
    flexGrow:1
  },

  menuItemText: {
    color: "#000",
    fontWeight: '400',
    fontHeiht: Height(10),
    fontSize: Width(6),
  },

  listMenuItem: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});

export default MenuScreen;
