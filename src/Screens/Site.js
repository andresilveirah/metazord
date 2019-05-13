/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Button } from 'react-native'
import type { NavigationScreenProps } from 'react-navigation'

import Text from 'components/Text'

import SiteForm from 'components/SiteForm'

/**
 * TODO
 * - Add toggle to enable keeping/erasing cookies
 * - Add toggle to enable keeping/hiding NavBar
 * - Use FontAwesome instead of emojis
 */

type Site = {
  accountId: string,
  siteName: string,
  campaignEnv: boolean,
  targetingParams: any
}
type Props = { navigation: NavigationScreenProps }
type State = { site: Site };
export default class SiteScreen extends Component<Props, State> {
  state = {
    site: {
      accountId: '22',
      siteName: 'mobile.demo',
      campaignEnv: false,
      targetingParams: {
        CMP: "true"
      }
    }
  }

  static navigationOptions = ({ navigation }: Props) => {
    const site = navigation.getParam('site', { siteName: '', accountId: ''})
    return {
      title: "Setup Site",
      headerRight: <Button
        title="Message"
        disabled={!SiteScreen.canNavigate(site.accountId, site.siteName)}
        onPress={() => navigation.navigate('ShowSite', { site })}
      />
    }
  }

  static canNavigate(accountId: string, siteName: string) {
    return siteName.trim() !== '' && accountId.trim() !== ''
  }

  updateNavigation(site) {
    this.props.navigation.setParams({ site })
  }

  componentDidMount() {
    this.updateNavigation(this.state.site)
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={[styles.site, styles.section]}>
          <SiteForm
            site={this.state.site}
            onSiteChange={(site) => {
              this.setState((state, props) => {
                this.updateNavigation(site)
                return { site }
              })
            }}
          />
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  section: {
    flex: 1,
    padding: '5%',
    minWidth: 324,
    minHeight: 609
  },
  site: {
    backgroundColor: '#FFF',
  },
  siteHeader: {
    fontSize: 36,
    height: 40
  }
});
