import { Height, Width } from "@/constants/theme";
import * as React from "react";
import { FlatList, ScrollView, View, StyleSheet, Image, Text } from "react-native";

function CoffeeItemComponent(props: any) {
  return (
    <View style={styles.container}>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    display:'flex',
    backgroundColor:'white',
    height: Height(40),
    borderRadius:20,
    width: Width(40)
  }
});

export default CoffeeItemComponent;