import React from 'react'
import { View, Text, TextInput } from 'react-native'

const InputEmail = (dataProps) => {
  return (
    <TextInput
      onChangeText={ (email)=> dataProps.getEmail(email) }
      placeholder="Email"
      style={{ 
        backgroundColor: 'white',
        fontSize: 17,
        width: '80%',
        borderRadius: 25,
        alignSelf: 'center',
        marginTop: 25,
      }}
    />
  )
}

export default InputEmail