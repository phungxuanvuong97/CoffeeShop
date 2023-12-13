import { Badge, BadgeText } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import CartIcon from "../icons/CartIcon";
import { SIZES } from "@/constants";
import { Width } from "@/constants/theme";

function CartComponent({
  navigation,
  content,
  backgroundColor = "#B98875ed",
  textColor = "white",
}: any) {
  return (
    <TouchableOpacity
      style={{ marginRight: SIZES.width / 16, bottom:10 }}
      onPress={() => navigation.navigate("CartScreen")}
    >
      {
        <Badge
          style={{
            backgroundColor: "#B98875ed",
            borderRadius: 50,
            alignSelf: "center",
            left: 12,
            top: 8,
          }}
        >
          <BadgeText color="#fff">{content}</BadgeText>
        </Badge>
      }
      <CartIcon width={Width(8)} height={Width(8)}></CartIcon>
    </TouchableOpacity>
  );
}

export default CartComponent;
