import React from 'react'
import { View, Text, TextInput } from 'react-native'

const InputPassword = (dataProps) => {
  return (
    <TextInput
      onChangeText={ (password) => dataProps.getPassword(password) }
      secureTextEntry={true}
      placeholder="Password"
      style={{ 
        backgroundColor: 'white',
        fontSize: 17,
        width: '80%',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 15,
      }}
    />
  )
}

export default InputPassword