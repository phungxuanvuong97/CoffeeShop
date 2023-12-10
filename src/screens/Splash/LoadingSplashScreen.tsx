import CoffeeImageIcon from "@/components/icons/CoffeImageIcon";
import { SIZES, images } from "@/constants";
import { Spinner, VStack } from "@gluestack-ui/themed";
import { ImageBackground, StyleSheet, View } from "react-native";

function LoadingSplashScreen({navigation}: any) {

  const imageWidth = SIZES.width / 2;
  const imageHeight = SIZES.height / 3;
  
  return (
    <View style={styles.screenContainer}>
      <ImageBackground
        source={images.backgroundImage}
        resizeMode="cover"
        style={styles.screenContainer}
      >
        <CoffeeImageIcon
          style={styles.mainImage}
          width={imageWidth}
          height={imageHeight}
        ></CoffeeImageIcon>
        <View style={styles.textContainer}>
          <VStack space="md">
            <Spinner color="$amber600" />
          </VStack>
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

export default LoadingSplashScreen;
