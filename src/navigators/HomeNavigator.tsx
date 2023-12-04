import React from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import { icons, COLORS, FONTS, SIZES } from '../constants';
import { HomeStackParamList, HomeBottmTabParamList } from '../types/NavigationTypes';
// screens
import Splashscreen from '../screens/Splash/SplashScreen';
import HelloSceen from '@/screens/Hello/HelloScreen';
import MenuIcon from '@/components/icons/MenuIcon';
import Menu from '@/screens/Menu/Menu';
import ProductDetail from '@/screens/ProductDetail/ProductDetail';
import Home from '@/screens/Home/Home';
import Locate from '@/screens/Locate/Locate';
import Profile from '@/screens/Profile/Profile';
import CartIcon from '@/components/icons/CartIcon';

const Stack = createStackNavigator<HomeStackParamList>()
const Tab = createBottomTabNavigator<HomeBottmTabParamList>()

function HomeTabs() {

    const tabBarHeight = SIZES.height / 8; 
    
    return (
        <Tab.Navigator 
            initialRouteName="Home"
            tabBarOptions={{
                labelStyle: { ...FONTS.home_btm_text },
                inactiveTintColor: '#D9D9D9',
                activeTintColor: '#B98875',
                tabBarActiveBackgroundColor:'#B98875'
            }}
            screenOptions={{
                tabBarStyle: [
                    { 
                        backgroundColor: 'white',
                        height:tabBarHeight,
                        borderTopLeftRadius:30,
                        borderTopRightRadius:30,
                        padding: tabBarHeight/8,
                    }
                ]
            }}
            >
            <Tab.Screen
                name="Home"
                component={Home}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                                source={icons.home_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                    ),
                    headerShown: false
                }} 
                />
            <Tab.Screen
                name="Locate"
                component={Locate}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                                source={icons.locate_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                    ),
                    headerShown: false
                }} 
                />
            <Tab.Screen
                name="Menu"
                component={Menu}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                                source={icons.cup_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                    ),
                    headerShown: false
                }} 
                />
            <Tab.Screen
                name="Account"
                component={Profile}
                options={{
                    tabBarIcon: ({ color, size }) => (
                        <Image
                                source={icons.profile_icon}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                    ),
                    headerShown: false
                }} 
                />
            
        </Tab.Navigator >
    )
}

export default function HomeNavigator() {
    const navigation = useNavigation<StackNavigationProp<HomeStackParamList>>()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="Home"
                component={HomeTabs}
                
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
                            onPress={() => navigation.navigate("Menu")}>
                            <MenuIcon width={25} height={25}></MenuIcon>
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            style={{ marginRight: SIZES.padding }}
                            onPress={() => console.log('Pressed')}>
                            <CartIcon width={25} height={25}></CartIcon>
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name="Splashscreen"
                component={Splashscreen}
                options={{
                    headerShown: false,
                }}
            />
            <Stack.Screen
                name="ProductDetail"
                component={ProductDetail}
                options={{
                    headerShown: true,
                }}
            />
            <Stack.Screen
                name="Menu"
                component={Menu}
                options={{
                    headerShown: true,
                }}
            />
        </Stack.Navigator>
    );
}