/* eslint no-use-before-define: 0 */
import React from "react";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { AppDrawerParamList } from "../types/NavigationTypes";
// navigators
import HomeNavigator from "./HomeNavigator";
import StartupNavigator from "./StartupNavigator";
import MenuNavigator from "./MenuNavigator";
import ProductDetail from "@/screens/ProductDetail/ProductDetailScreen";
import ProductDetailNavigator from "./ProductDetailsNavigator";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator
        screenOptions={{
          headerShown: false,
          headerTransparent: true,
          
        }}
        drawerContentOptions={{
          activeTintColor: "#e91e63",
          itemStyle: { marginVertical: 5 },
        }}
      >
        <Drawer.Screen
          name="HomeNavigator"
          options={{ drawerLabel: "HomeNavigator" }}
          component={HomeNavigator}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
