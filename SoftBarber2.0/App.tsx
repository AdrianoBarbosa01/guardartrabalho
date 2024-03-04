import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { AppRoutes } from './src/routes/app.routes'
import { StatusBar } from 'expo-status-bar'
import { Cadastro } from './src/screens/AcessoScreens/Cadastro';

export default function App() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
    
      <AppRoutes />
    </View>
  )
};