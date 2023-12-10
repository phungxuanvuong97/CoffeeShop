import React from "react";
import { Image, Text, TouchableOpacity } from "react-native";
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation, DrawerActions } from "@react-navigation/native";
import { icons, COLORS, FONTS, SIZES } from "../constants";
import {
  HomeStackParamList,
  HomeBottmTabParamList,
} from "../types/NavigationTypes";
// screens
import Splashscreen from "../screens/Splash/SplashScreen";
import MenuIcon from "@/components/icons/MenuIcon";
import ProductDetail from "@/screens/ProductDetail/ProductDetailScreen";
import Locate from "@/screens/Locate/LocateScreen";
import Profile from "@/screens/Profile/ProfileScreen";
import CartIcon from "@/components/icons/CartIcon";
import CoffeeCupIcon from "@/components/icons/CoffeeCupIcon";
import CoffeeShopIcon from "@/components/icons/CoffeeShopIcon";
import QRIcon from "@/components/icons/QRIcon";
import HomeIcon from "@/components/icons/HomeIcon";
import ProfileIcon from "@/components/icons/ProfileIcon";
import RewardIcon from "@/components/icons/RewardIcon";
import OrderScreen from "@/screens/Order/OrderScreen";
import HomeScreen from "@/screens/Home/HomeScreen";
import LocateScreen from "@/screens/Locate/LocateScreen";
import ProfileScreen from "@/screens/Profile/ProfileScreen";
import MenuScreen from "@/screens/Menu/MenuScreen";
import SplashScreen from "../screens/Splash/SplashScreen";
import ProductDetailScreen from "@/screens/ProductDetail/ProductDetailScreen";
import { Badge, BadgeText } from "@gluestack-ui/themed";
import { useAppData, useAppDataDispatch } from "@/context/AppDataContext";
import CartComponent from "@/components/common/CartComponent";
import MenuComponent from "@/components/common/MenuComponent";

const Stack = createStackNavigator<HomeStackParamList>();
const Tab = createBottomTabNavigator<HomeBottmTabParamList>();

function HomeTabs() {
  const tabBarHeight = SIZES.height / 8;

  return (
    <Tab.Navigator
      tabBarOptions={{
        labelStyle: { ...FONTS.home_btm_text },
        inactiveTintColor: "#D9D9D9",
        activeTintColor: "#B98875",
        //tabBarActiveBackgroundColor: "#B98875",
      }}
      screenOptions={{
        tabBarStyle: [
          {
            backgroundColor: "white",
            height: tabBarHeight,
            //borderTopLeftRadius: 30,
            //borderTopRightRadius: 30,
            padding: tabBarHeight / 8,
          },
        ],
        tabBarActiveTintColor: "#B98875",
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <HomeIcon width={size} height={size} color={color} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Reward"
        component={LocateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <RewardIcon width={size} height={size} color={color}></RewardIcon>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Scan"
        component={LocateScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <QRIcon width={size} height={size} color={color}></QRIcon>
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Order"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <CoffeeCupIcon
              width={size}
              height={size}
              color={color}
            ></CoffeeCupIcon>
          ),
          headerShown: false,
          tabBarBadge: "1",
          tabBarBadgeStyle: {
            backgroundColor: "#B98875",
            color: "white",
          },
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color, size }) => (
            <ProfileIcon width={size} height={size} color={color}></ProfileIcon>
          ),
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function HomeNavigator() {
  const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>();

  const appDataDispatcher = useAppDataDispatch();
  const appData = useAppData();

  return (
    <Stack.Navigator initialRouteName="SplashScreen">
      <Stack.Screen
        name="Home"
        component={HomeTabs}
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
            <MenuComponent navigation={navigation} navigateBack={"MenuScreen"}></MenuComponent>
          ),
          headerRight: () => (
            <CartComponent content={appData?.carts.length}></CartComponent>
          ),
        }}
      />
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="ProductDetail"
        component={ProductDetailScreen}
        options={{
          headerShown: false,
        }}
      />
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
            <MenuComponent navigation={navigation} navigateBack={"Home"} icon={()=><Image
              source={icons.left_icon}
              resizeMode="contain"
              style={{
                width: 24,
                height: 24,
                flexGrow: 1,
              }}
            />}></MenuComponent>
          ),
          headerRight: () => (
            <CartComponent content={appData?.carts.length}></CartComponent>
          ),
        }}
      />
    </Stack.Navigator>
  );
}
