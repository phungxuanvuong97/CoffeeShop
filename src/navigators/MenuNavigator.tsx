import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS, icons, SIZES } from '../constants';
// screens
import HelloSceen from '@/screens/Hello/HelloScreen';
import SplashScreen from '@/screens/Splash/SplashScreen';
import { MenuStackParamList } from '@/types/NavigationTypes';
import Menu from '@/screens/Menu/Menu';
import { Image, TouchableOpacity } from 'react-native';
import MenuIcon from '@/components/icons/MenuIcon';

const Stack = createStackNavigator()

export default function MenuNavigator() {
    const navigation = useNavigation<StackNavigationProp<MenuStackParamList>>();
    return (
        <Stack.Navigator 
        initialRouteName="MenuNavigator"
        screenOptions={{
            headerShown: true
          }}
        >
            <Stack.Screen
                name="Menu"
                component={Menu}
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
                            onPress={() => console.log('Pressed')}>
                            <Image
                                source={icons.search}
                                resizeMode="contain"
                                style={{
                                    width: 30,
                                    height: 30,
                                }}
                            />
                        </TouchableOpacity>
                    ),
                }}
            />

        </Stack.Navigator>
    );
}