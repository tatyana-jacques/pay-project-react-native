import "react-native-gesture-handler"

import {NavigationContainer} from "@react-navigation/native"
import {createStackNavigator} from "@react-navigation/stack"


import Home from "./src/Home/Home"
import Login from "./src/Login/Login"

const Stack = createStackNavigator ()


export default function App () {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
        name="Home"
        component = {Home}
        options = {{
          headerShown: false
        }}
        />
        <Stack.Screen
        name="Login"
        component = {Login}
        options = {{
          headerShown: false
        }}
        />


      </Stack.Navigator>


    </NavigationContainer>
  )
}
