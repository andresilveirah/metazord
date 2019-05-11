/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react'
import { StyleSheet, View, SafeAreaView } from 'react-native'

import Text from 'components/Text'

import SiteForm from 'components/SiteForm'

type Props = {};
type State = {
  accountId: string,
  siteName: string,
  campaignEnv: boolean,
  targetingParams: any
};
export default class App extends Component<Props, State> {
  state = {
    accountId: '',
    siteName: '',
    campaignEnv: false,
    targetingParams: {
      foo: "Bar",
      bar: "foo"
    }
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
            onSiteChange={(site) => this.setState({ ...site })}
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
