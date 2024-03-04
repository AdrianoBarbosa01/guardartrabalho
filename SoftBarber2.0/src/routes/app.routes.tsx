import React from 'react';

import { NavigationContainer } from '@react-navigation/native'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather } from '@expo/vector-icons'

import { HomeScreen } from '../screens/HomeScreen';
import { PerfilScreen } from '../screens/PerfilScreen';
import { AgendamentosScreen } from '../screens/AgendamentosScreen';
import { DriverScreen } from '../screens/DriverScreen';
import { BuscaScreen } from '../screens/BuscaScreen';

const { Navigator, Screen } = createBottomTabNavigator();

export function AppRoutes() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{
                headerShown:false,
                headerTitleAlign: 'center'


                //EstiloNavBar



            }}>
                <Screen
                    name='Home'
                    component={HomeScreen}
                    options={{
                        tabBarIcon: () => {
                            return <Feather name='home' size={25} color={'#000'} />
                        }
                    }} />
                <Screen name='Buscar' component={BuscaScreen} options={{
                    tabBarIcon: () => {
                        return <Feather name='search' size={25} color={'#000'} />
                    }
                }} />
                <Screen name='Driver' component={DriverScreen} options={{
                    tabBarIcon: () => {
                        return <Feather name='map' size={25} color={'#000'} />
                    }
                }} />
                <Screen name='Agendamentos' component={AgendamentosScreen} options={{
                    tabBarIcon: () => {
                        return <Feather name='calendar' size={25} color={'#000'} />
                    }
                }} />
                <Screen name='Perfil' component={PerfilScreen} options={{
                    tabBarIcon: () => {
                        return <Feather name='user' size={25} color={'#000'} />
                    }
                }} />
            </Navigator>
        </NavigationContainer>
    )
}