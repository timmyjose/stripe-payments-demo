import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './screens/Home'
import Stripe from './screens/Stripe'

export type RootStackParamsList = {
  Home: undefined
  Stripe: undefined
}

const Stack = createNativeStackNavigator<RootStackParamsList>()

export function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Stripe' component={Stripe} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;
