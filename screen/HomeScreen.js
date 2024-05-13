import React from 'react'
import { Button, View, Text } from 'react-native'


export const HomeScreen = ({ navigation}) => {
  return (
    <View>
      <Button 
        title='Iniciar Sesion'
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  )
}
