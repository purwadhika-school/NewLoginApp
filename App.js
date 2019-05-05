import React, { Component } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import ButtonConnect from './src/components/ButtonConnect'

// JS
class App extends Component {
  render(){
    return (
      <View style={{ backgroundColor: '#9ACCBE', flex: 1 }}>
        <View style={{ backgroundColor: 'red', flex: 1 }} />
        <View style={{ backgroundColor: 'green', flex: 1 }} />
        <View style={{ flex: 0.5 }}>
          <ButtonConnect />
        </View>
      </View>
    )
  }
}

export default App