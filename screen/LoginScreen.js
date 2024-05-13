import React, { useState } from 'react'
import { View, Text, TextInput, Button } from 'react-native'
import {users} from '../data/users.js'

export const LoginScreen = ({navigation}) => {

    const [userName, setUserName] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        const user = users.find(user => user.name === userName && user.password === password)
        if(!user){
            navigation.navigate('UserError')
        }

        navigation.navigate('User', user)
    }


    return (
        <View>
            <Text>Login</Text>

            <TextInput 
                placeholder='Name'
                onChange={(e) => setUserName(e.nativeEvent.text)}
            />
            <TextInput
                placeholder='Password'
                onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <Button
                title='Iniciar Sesion'
                onPress={() => handleLogin()}
            />
        </View>
    )
}
