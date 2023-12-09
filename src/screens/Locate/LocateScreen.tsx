import { StyleSheet, Text, View } from "react-native";

function LocateScreen(){
    return (
        <View style={styles.screenContainer}>
            <Text>
                    Scan
            </Text>
        </View>
    );
}


const styles =  StyleSheet.create({
    screenContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor:'#FAF4EE',
        height:'100%'
      },
});

export default LocateScreen;