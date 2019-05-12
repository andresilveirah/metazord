import React from 'react'
import { createAppContainer, createStackNavigator } from 'react-navigation'

import SiteScreen from 'screens/Site'
import ShowSiteScreen from 'screens/ShowSite'

const AppContainer = createAppContainer(
  createStackNavigator(
    {
      Site: {
        screen: SiteScreen
      },
      ShowSite: ShowSiteScreen
    },
    { initialRouteName: "Site" }
  )
)

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
