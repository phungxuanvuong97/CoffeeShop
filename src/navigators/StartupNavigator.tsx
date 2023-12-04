import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { useNavigation } from '@react-navigation/native';
import { COLORS, FONTS } from '../constants';
// screens
import { StartupStackParamList } from '@/types/NavigationTypes';
import HelloSceen from '@/screens/Hello/HelloScreen';
import SplashScreen from '@/screens/Splash/SplashScreen';

const Stack = createStackNavigator()

export default function StartupNavigator() {
    const navigation = useNavigation<StackNavigationProp<StartupStackParamList>>()
    return (
        <Stack.Navigator 
        initialRouteName="Splashscreen"
        screenOptions={{
            headerShown: false
          }}
        >
            <Stack.Screen
                name="Hello"
                component={HelloSceen}
                options={{
                    title: 'Hello',
                    headerStyle: {
                        //backgroundColor: '#f4511e',
                    },
                    headerTintColor: COLORS.lightGray,
                    headerTitleStyle: {
                        ...FONTS.navTitle,
                    },
                }}
            />

            <Stack.Screen
                name="Splashscreen"
                component={SplashScreen}
                options={{
                    headerShown: false,
                }}
            />

        </Stack.Navigator>
    );
}