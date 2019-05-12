import React from 'react'
import { Image } from 'react-native'

const Logo = () => {
  return (
    <Image
      style={{ 
        width: 300,
        height: 300

      }}
      source={require('../../assets/images/company_logo.png')} />
  )
}

export default Logo