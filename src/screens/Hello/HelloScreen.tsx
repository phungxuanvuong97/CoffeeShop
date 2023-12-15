import CoffeeImageIcon from "@/components/icons/CoffeImageIcon";
import { SIZES, icons, images } from "@/constants";
import { Width } from "@/constants/theme";
import { View, Image, StyleSheet, Text } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

function HelloSceen({ navigation }: any) {



  return (
    <View style={styles.screenContainer}>
      <View style={styles.mainImage}>
        {/* <Image source={images.coffeCar} /> */}
        <CoffeeImageIcon width={204} height={322}></CoffeeImageIcon>
      </View>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>Get the best coffee</Text>
        <Text style={styles.mainText}>In town!</Text>
      </View>

      <View style={styles.functionButtonList}>
        <View style={styles.buttonList}>
          <TouchableOpacity
            style={styles.registerButton}
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.registerButtonText}>Register</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Log in</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.socialButtonList}>
          <TouchableOpacity style={styles.socialButton}>
            <Image
              style={styles.socialButtonIcon}
              source={icons.facebook_icon}
            ></Image>
            <Text style={styles.socialButtonText}>Connect with facebook</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const registerButtonWidth = SIZES.width / 3;
const loginButtonWidth = SIZES.width / 3;
const buttonGap = SIZES.width / 8;
const socialButtonWidth = registerButtonWidth + loginButtonWidth + buttonGap / 2;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: "#FFFFFF",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    height: "100%",
  },

  mainImage: {
    paddingTop: 1,
  },

  mainTextContainer: {
    marginTop: SIZES.height/20,
    marginBottom: SIZES.height/12,
  },

  mainText: {
    color: "#000000",
    fontSize: Width(10),
    textAlign: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5.46,
    elevation: 9,
  },
  functionButtonList: {
    display: "flex",
    flexDirection: "column",
  },
  buttonList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: 'center',
    gap: buttonGap,
  },

  registerButton: {
    backgroundColor: "#B98875",
    borderRadius: 25,
    borderColor: "#000000",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.46,
    elevation: 9,
    minWidth: registerButtonWidth
  },

  LoginButton: {
    backgroundColor: "#D9D9D9",
    borderRadius: 25,
    borderColor: "#B98875",
    borderWidth: 1,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 5.46,
    elevation: 9,
    minWidth: loginButtonWidth
  },

  registerButtonText: {
    color: "#FFFFFF",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 33,
    fontStyle: "normal",
    letterSpacing: -0.32,
    padding:5
  },

  LoginButtonText: {
    color: "#B98875",
    fontSize: 20,
    textAlign: "center",
    fontWeight: "400",
    lineHeight: 33,
    fontStyle: "normal",
    letterSpacing: -0.32,
    padding:5
  },

  socialButtonList: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
   
  },

  socialButton: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#000000",
    borderRadius: 40,
    margin: 20,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent:'space-around',
    minWidth: socialButtonWidth
  },

  socialButtonText: {
    color: "#3D6AD6",
    lineHeight: 33,
    fontWeight: "600",
    fontStyle: "normal",
    letterSpacing: -0.32,
    padding:5
  },

  socialButtonIcon: {
    marginLeft: 10,
  },
});

export default HelloSceen;
