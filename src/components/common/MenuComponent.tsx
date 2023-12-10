import { TouchableOpacity } from "react-native";
import MenuIcon from "../icons/MenuIcon";
import { SIZES } from "@/constants";

function MenuComponent({ navigation, navigateBack = "Home", icon =  ()=><MenuIcon width={25} height={25}></MenuIcon>}: any) {
  return (
    <TouchableOpacity
      style={{ marginLeft: SIZES.padding }}
      onPress={() => navigation.navigate(navigateBack)}
    >
      {icon()}
    </TouchableOpacity>
  );
}

export default MenuComponent;
