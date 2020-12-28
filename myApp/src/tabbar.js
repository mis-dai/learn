import * as React from 'react';
import { View, Text, Button,Image, StyleSheet} from 'react-native';
import TabNavigator from 'react-native-tab-navigator'
import Home from './pages/home';
import Category from './pages/category';
import User from './pages/user';

class Tabbar extends React.Component{

  state={
    pages:[
      {
        selected: 'home',
        title: '主页',
        renderIcon: () => <Image source={require('../util/image/nav-icon-index.png')} style={styles.img}/>,
        renderSelectedIcon: () => <Image source={require('../util/image/nav-icon-index.active.png')} style={styles.img}/>,
        onPress: () => this.setState({selectedTab: 'home'}),
        component: <Home />
      },
      {
        selected: 'category',
        title: '分类',
        renderIcon: () => <Image source={require('../util/image/nav-icon-cat.png')} style={styles.img}/>,
        renderSelectedIcon: () => <Image source={require('../util/image/nav-icon-cat.active.png')} style={styles.img}/>,
        onPress: () => this.setState({selectedTab: 'category'}),
        component: <Category />
      },
      {
        selected: 'user',
        title: '用户',
        renderIcon: () => <Image source={require('../util/image/nav-icon-user.png')} style={styles.img}/>,
        renderSelectedIcon: () => <Image source={require('../util/image/nav-icon-user.active.png')} style={styles.img}/>,
        onPress: () => this.setState({selectedTab: 'user'}),
        component: <User />
      }
    ],
    selectedTab: 'home'
  }
  render() {
    const { pages, selectedTab} = this.state
    return(
      <View style={styles.contain}>
        <TabNavigator>
          {pages.map((v, i) => 
              <TabNavigator.Item key={i}
                  selected = {selectedTab === v.selected}
                  title = {v.title}
                  renderIcon = {v.renderIcon}
                  renderSelectedIcon = {v.renderSelectedIcon}
                  onPress = {v.onPress}>
                      {v.component}      
              </TabNavigator.Item>
          )}
        </TabNavigator>
      </View>

    )
  }
}
export default Tabbar

const styles = StyleSheet.create({
  img: {
    width: 30,
    height: 30
  },
  contain: {
    flex: 1
  }
})