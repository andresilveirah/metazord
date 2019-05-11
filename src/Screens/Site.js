/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView, Button } from 'react-native'

import Text from 'components/Text'

import SiteForm from 'components/SiteForm'

type Props = {};
type State = {
  accountId: string,
  siteName: string,
  campaignEnv: boolean,
  targetingParams: any
};
export default class SiteScreen extends Component<Props, State> {
  state = {
    accountId: '22',
    siteName: 'mobile.demo',
    campaignEnv: false,
    targetingParams: {
      CMP: "true"
    }
  }

  static navigationOptions = ({ navigation }) => ({
    title: "",
    headerRight: <Button title="Next" onPress={() => navigation.navigate('ShowSite', { site: navigation.getParam('site') })} />
  })

  componentDidMount() {
    this.props.navigation.setParams({ site: this.state })
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#fff'}}>
        <View style={[styles.site, styles.section]}>
          <View style={{ alignItems: 'center', marginBottom: '10%' }}>
            <Text style={[styles.siteHeader]}>🤖 MetaZord</Text>
          </View>
          <SiteForm
            site={this.state}
            onSiteChange={(site) => {
              this.setState((state, props) => {
                props.navigation.setParams({ site })
                return { ...state, ...site }
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
