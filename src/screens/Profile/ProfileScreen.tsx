import { StyleSheet, Text, View } from "react-native";

function ProfileScreen(){
    return (
        <View style={styles.screenContainer}>
            <Text>
                    Profile
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



export default ProfileScreen;