import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import ButtonConnect from './src/components/ButtonConnect'
import InputEmail from './src/components/InputEmail'
import InputPassword from './src/components/InputPassword'
import ButtonLogin from './src/components/ButtonLogin'

// JS
class App extends Component {
  render(){
    return (
      <View style={{ backgroundColor: '#9ACCBE', flex: 1 }}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ flex: 1 }}>
          <InputEmail />
          <InputPassword />
          <ButtonLogin />
        </View>
        <View style={{ flex: 0.5 }}>
          <ButtonConnect />
        </View>
      </View>
    )
  }
}

export default App