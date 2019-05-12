import React, { Component } from 'react'
import { TouchableOpacity, Text, View, TextInput } from 'react-native'
import ButtonConnect from './src/components/ButtonConnect'
import InputEmail from './src/components/InputEmail'
import InputPassword from './src/components/InputPassword'
import ButtonLogin from './src/components/ButtonLogin'
import ForgotPassword from './src/components/ForgotPassword'
import NewAccount from './src/components/NewAccount'
import Logo from './src/components/Logo'


// JS
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailUser: 'sadas'
    }
  }

  render(){
    console.log(this.state.emailUser)
    return (
      <View style={{ backgroundColor: '#9ACCBE', flex: 1 }}>
        <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 1 }}>
          <InputEmail />
          <InputPassword />
          <ButtonLogin />
          
          <View 
            style={{ 
              marginTop: 15,
              justifyContent: 'space-evenly',
              flexDirection: 'row',
              alignItems: 'center',

            }}>
            <ForgotPassword />
            <NewAccount />
          </View>

        </View>
        <View style={{ 
          flex: 0.5, 
          justifyContent: 'center',
          alignItems: 'center'
        }}>
          <ButtonConnect />
        </View>
      </View>
    )
  }
}

export default App