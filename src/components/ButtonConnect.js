import React from 'react'
import { TouchableOpacity, Text } from 'react-native'

const ButtonConnect = () => {
  return (
    <TouchableOpacity 
      style={{ 
        borderRadius: 25, 
        borderWidth: 1, 
        borderColor: 'white',
        width: '80%',
        alignSelf: 'center',
      }}>
      <Text 
        style={{ 
          textAlign: 'center',
          margin: 10,
          fontSize: 25,
          color: 'white',
          fontWeight: 'bold'
        }}>Connect with Social Account</Text>
    </TouchableOpacity>
  )
}

export default ButtonConnect