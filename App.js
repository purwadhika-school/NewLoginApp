import React, { Component } from 'react'
import { Alert, TouchableOpacity, Text, View, TextInput } from 'react-native'
import ButtonConnect from './src/components/ButtonConnect'
import InputEmail from './src/components/InputEmail'
import InputPassword from './src/components/InputPassword'
import ButtonLogin from './src/components/ButtonLogin'
import ForgotPassword from './src/components/ForgotPassword'
import NewAccount from './src/components/NewAccount'
import Logo from './src/components/Logo'
import Home from './src/components/Home'
import firebase from '@firebase/app'
import '@firebase/auth'
import { createStackNavigator } from 'react-navigation'


// JS
class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      emailUser: '',
      passwordUser: '',
      isLoading: false
    }
  }

  getEmail = (email) => {
    this.setState({ emailUser: email })
  }

  getPassword = (password) => this.setState({ passwordUser: password })

  loginHandler = () => {
    const { emailUser, passwordUser } = this.state

    if (emailUser === '' || passwordUser === '') {
      Alert.alert('Warning', 'Email dan Password tidak boleh kosong!')
    } else {
      this.setState({ isLoading: true })
      firebase.auth().signInWithEmailAndPassword(emailUser, passwordUser)
        .then(response => {
          console.log(response)
          this.setState({ isLoading: false }, ()=> {
            this.props.navigation.navigate('HomePage')
          })
        })
        .catch(error => {
          firebase.auth().createUserWithEmailAndPassword(emailUser, passwordUser)
            .then(res =>{
              console.log(res)
              this.setState({ isLoading: false }, ()=> {
                this.props.navigation.navigate('HomePage')
              })
            })
            .catch(err => {
              console.log(err.code, err.message)
            })
        })
    }
  }

  render(){
    return (
      <View style={{ backgroundColor: '#9ACCBE', flex: 1 }}>
        <View style={{ flex: 1.5, justifyContent: 'center', alignItems: 'center' }}>
          <Logo />
        </View>
        <View style={{ flex: 1 }}>
          <InputEmail getEmail={this.getEmail} />
          <InputPassword getPassword={this.getPassword} />
          <ButtonLogin 
            isLoading={this.state.isLoading}
            loginHandler={this.loginHandler} />
          
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

const RootNavigation = createStackNavigator({
  LoginPage: {
    screen: App
  },
  HomePage: {
    screen: Home
  },
})

export default RootNavigation