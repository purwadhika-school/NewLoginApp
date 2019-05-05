import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { white } from 'ansi-colors';

const NewAccount = () => {
  return (
    <TouchableOpacity>
      <Text 
        style={{ 
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
        }}>New Account</Text>
    </TouchableOpacity>
  )
}

export default NewAccount