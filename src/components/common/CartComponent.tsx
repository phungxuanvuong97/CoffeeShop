import { Badge, BadgeText } from "@gluestack-ui/themed";
import { TouchableOpacity } from "react-native";
import CartIcon from "../icons/CartIcon";
import { SIZES } from "@/constants";

function CartComponent({content, backgroundColor = "#B98875ed", textColor = 'white'}: any){
    return (
        <TouchableOpacity
              style={{ marginRight: SIZES.width / 16 }}
              onPress={() => console.log("Pressed")}
            >
              <Badge
                style={{
                  backgroundColor: "#B98875ed",
                  borderRadius: 50,
                  alignSelf: "center",
                  left: 12,
                  top:8
                }}
              >
                <BadgeText color="#fff">{content}</BadgeText>
              </Badge>
              <CartIcon width={30} height={30}></CartIcon>
            </TouchableOpacity>
    )
}

export default CartComponent;