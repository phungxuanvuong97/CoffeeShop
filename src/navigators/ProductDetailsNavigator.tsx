

import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
// screens
import HelloSceen from '@/screens/Hello/HelloScreen';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { MenuStackParamList } from '@/types/NavigationTypes';
import Menu from '@/screens/Menu/MenuScreen';
import { Image, TouchableOpacity } from 'react-native';
import MenuIcon from '@/components/icons/MenuIcon';
import ProductDetail from '@/screens/ProductDetail/ProductDetailScreen';
import { HomeOld } from '@/screens';
import ProductDetailScreen from '@/screens/ProductDetail/ProductDetailScreen';
import CartIcon from '@/components/icons/CartIcon';

const Stack = createStackNavigator()

export default function ProductDetailNavigator() {
    const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();
    return (
        <Stack.Navigator 
        initialRouteName="ProductDetailScreen"
        screenOptions={{
            headerShown: true
          }}
        >
            <Stack.Screen
                name="ProductDetailScreen"
                component={ProductDetailScreen}
                options={{
                    title: ' ',
                    headerStyle: {
                        backgroundColor: '#FAF4EE',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle
                    },
                    headerLeft: ({ onPress }) => (
                        <TouchableOpacity
                            style={{ marginLeft: SIZES.padding }}
                            onPress={() => navigation.navigate("Home")}>
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

        </Stack.Navigator>
    );
}