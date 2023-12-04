import { StyleSheet, View } from "react-native";
import { Text } from "react-native-svg";

function ProductDetail({route, navigation}: any){

    var {id, name, icon} = route.params;

    return (
        <View>
            <Text style={{color:'red'}}>
                hihihihi
            </Text>
        </View>
    );

}


const styles = StyleSheet.create({

});

export default ProductDetail;