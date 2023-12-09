import React from "react";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";
import { COLORS, FONTS, icons, SIZES } from "../constants";
// screens
import HelloSceen from "@/screens/Hello/HelloScreen";
import SplashScreen from "@/screens/Splash/SplashScreen";
import { MenuStackParamList } from "@/types/NavigationTypes";
import Menu from "@/screens/Menu/MenuScreen";
import { Image, TouchableOpacity } from "react-native";
import MenuIcon from "@/components/icons/MenuIcon";
import ProductDetail from "@/screens/ProductDetail/ProductDetailScreen";
import MenuScreen from "@/screens/Menu/MenuScreen";
import ProductDetailScreen from "@/screens/ProductDetail/ProductDetailScreen";
import CartIcon from "@/components/icons/CartIcon";

const Stack = createStackNavigator();

export default function MenuNavigator() {
  const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();
  return (
    <Stack.Navigator
      initialRouteName="MenuScreen"
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        name="MenuScreen"
        component={MenuScreen}
        options={{
          title: " ",
          headerStyle: {
            backgroundColor: "#FAF4EE",
          },
          headerTintColor: COLORS.lightGray,
          headerTitleStyle: {
            ...FONTS.navTitle,
          },
          headerLeft: ({ onPress }) => (
            <TouchableOpacity
              style={{ marginLeft: SIZES.padding }}
              onPress={() => navigation.navigate("Home")}
            >
              <MenuIcon width={25} height={25}></MenuIcon>
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ marginRight: SIZES.padding }}
              onPress={() => console.log("Pressed")}
            >
              <CartIcon width={25} height={25}></CartIcon>
            </TouchableOpacity>
          ),
        }}
      />
      
      <Stack.Screen
        name="SplashScreen"
        component={({navigation}: any) => <SplashScreen navigation={navigation} backScreen={'MenuScreen'}></SplashScreen>}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
