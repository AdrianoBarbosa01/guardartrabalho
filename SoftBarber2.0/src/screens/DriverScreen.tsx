import { View, Text } from 'react-native'
import React from 'react'

export function DriverScreen({navigation}) {
    return (
        <View>
            <Text
            onPress={() => navigation.navigate('Home')}
            >DriverScreen</Text>
        </View>
    )
}