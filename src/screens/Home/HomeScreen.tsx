import { StyleSheet, Text, View } from "react-native";

function HomeScreen(){
    return (
        <View style={styles.screenContainer}>
            <Text>
                    Home
            </Text>
        </View>
    );
}

const styles =  StyleSheet.create({
    screenContainer: {
        display: "flex",
        flexDirection: "column",
        backgroundColor:'#FAF4EE',
        height:'100%',
        width:'100%'
      },
});

export default HomeScreen;