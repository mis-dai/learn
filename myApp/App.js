// In App.js in a new project

import * as React from 'react';
import { View, Text, Button} from 'react-native';
import RootStore from './mobx'
import {Provider} from 'mobx-react'
import Nav from './src/nav'
class App extends React.Component{
  render() {
    return(
    <Provider RootStore={RootStore}>
      <Nav />
    </Provider>
        
    )
  }
}


export default App;