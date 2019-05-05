import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { white } from 'ansi-colors';

const ForgotPassword = () => {
  return (
    <TouchableOpacity>
      <Text 
        style={{ 
          color: 'white',
          fontWeight: 'bold',
          fontSize: 18,
        }}>Forgot Password?</Text>
    </TouchableOpacity>
  )
}

export default ForgotPassword