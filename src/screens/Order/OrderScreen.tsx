import { View, Text, StyleSheet } from "react-native";

function OrderScreen(){
    return <View style={styles.screenContainer}><Text>Order Screen</Text></View>
}


const styles =  StyleSheet.create({
    screenContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor:'#FAF4EE',
        height:'100%'
      },
});

export default OrderScreen;