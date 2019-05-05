import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'

const ButtonLogin = () => {
  return (
    <TouchableOpacity
      style={{
        borderRadius: 25,
        borderWidth: 0,
        backgroundColor: '#475953',
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
      }}>
      <Text style={{ 
        margin: 10,
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
      }}>Sign In</Text>
    </TouchableOpacity>
  )
}

export default ButtonLogin