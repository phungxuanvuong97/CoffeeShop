import { TouchableOpacity } from "react-native";
import MenuIcon from "../icons/MenuIcon";
import { SIZES } from "@/constants";

function MenuComponent({ navigation, navigateBack, icon =  ()=><MenuIcon width={30} height={30}></MenuIcon>}: any) {
  return (
    <TouchableOpacity
      style={{ marginLeft: SIZES.padding }}
      onPress={() => navigateBack != null ? navigation.navigate(navigateBack) : navigation.goBack()}
    >
      {icon()}
    </TouchableOpacity>
  );
}

export default MenuComponent;
