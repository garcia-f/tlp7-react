import React from 'react'
import { View, Text, Button } from 'react-native'
import { users } from '../data/users.js'

export const UserScreen = ({route}) => {
    const { name, password } = route.params

    users[0].name = 'Juancho'
  return (
    <View>
      <Text>User: {name}</Text>
      <Text>Password: {password}</Text>

    </View>
  )
}
