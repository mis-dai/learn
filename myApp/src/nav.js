// In App.js in a new project


import * as React from 'react';
import { View, Text, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './pages/home'
import Tabbar from './tabbar'
function HomeScreen({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button title='下一页' onPress={() => navigation.navigate('Second')}/>
    </View>
  );
}

const Stack = createStackNavigator();
function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="Tabbar">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Tabbar" component={Tabbar} />
        <Stack.Screen name="Second" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Nav;