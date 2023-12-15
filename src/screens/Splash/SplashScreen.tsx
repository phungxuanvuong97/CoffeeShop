import CoffeeImageIcon from "@/components/icons/CoffeImageIcon";
import { SIZES, images } from "@/constants";
import { useEffect } from "react";
import { StyleSheet, View, Image, ImageBackground, Text } from "react-native";

function SplashScreen({ navigation, backScreen = "Home"}: any) {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(backScreen);
    }, 1000);
  }, []);

  const imageWidth = SIZES.width / 2;
  const imageHeight = SIZES.height / 3;

  return (
    <View >
      <ImageBackground
        source={images.backgroundImage}
        resizeMode="cover"
        style={styles.screenContainer}
      >
        <CoffeeImageIcon style={styles.mainImage} width={imageWidth} height={imageHeight}></CoffeeImageIcon>
        <View style={styles.textContainer}>
          <Text style={styles.firstText}>Coffee</Text>
          <Text style={styles.secondText}> Home</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const fontSize = SIZES.width / 10;

const styles = StyleSheet.create({
  screenContainer: {
    //backgroundColor: "#fff",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
  textContainer:{
    display:'flex',
    flexDirection:'row'
  },
  mainImage:{
  },
  firstText:{
    fontSize:fontSize,
    color:'#AC7349',
    fontWeight:'600'
  },
  secondText:{
    fontSize:fontSize,
    color:'#572908',
    fontWeight:'600'
  },
});

export default SplashScreen;
