import React from 'react'
import { ActivityIndicator, View, TouchableOpacity, Text } from 'react-native'

const ButtonLogin = ({ isLoading, loginHandler }) => {
  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={ ()=> loginHandler() }
      style={{
        borderRadius: 25,
        borderWidth: 0,
        backgroundColor: '#475953',
        width: '80%',
        alignSelf: 'center',
        marginTop: 30,
      }}>
      {
        isLoading === false ? (
          <Text style={{ 
            margin: 10,
            textAlign: 'center',
            color: 'white',
            fontSize: 25,
            fontWeight: 'bold',
          }}>Sign In</Text>
        ) : (
          <ActivityIndicator size={"large"} style={{ margin: 10 }} />
        )
      }
    </TouchableOpacity>
  )
}

export default ButtonLogin