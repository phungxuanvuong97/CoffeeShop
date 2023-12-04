import { images } from "@/constants";
import { useEffect } from "react";
import { StyleSheet, View,Image } from "react-native";



function SplashScreen({navigation}: any){

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate("Hello");            
        }, 1000);
    }, []);

    return(
        <View style={styles.screenContainer}>
            <Image source={images.coffeCup} />
        </View>
    )
}

const styles = StyleSheet.create({
    screenContainer:{
        backgroundColor: '#fff',
        display:'flex',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
        height:'100%'
    }
});

export default SplashScreen;