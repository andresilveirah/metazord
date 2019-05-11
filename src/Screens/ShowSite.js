import React from 'react'
import {  View, Text, AsyncStorage }from 'react-native'
import { WebView } from 'react-native-webview'

const inAppMessageUrl = (accountId, siteName, staging, targetingParams) => {
  return `https://in-app-messaging.pm.sourcepoint.mgr.consensu.org/index2.html?_sp_msg_targetingParams=${JSON.stringify(targetingParams)}&_sp_cmp_inApp=true&_sp_writeFirstPartyCookies=true&_sp_siteHref=http://${siteName}&_sp_accountId=${accountId}&_sp_msg_domain=mms.sp-prod.net&_sp_cmp_origin=%2F%2Fsourcepoint.mgr.consensu.org&_sp_debug_level=OFF&_sp_msg_stageCampaign=${staging}&incognito&uid=${Math.floor((Math.random()*1000000)+1)}`;
}

export default ({ navigation }) => {
  const { accountId, siteName, campaignEnv, targetingParams } = navigation.getParam('site', { siteName: 'No Site Found' })
  AsyncStorage.clear()
  return (
    <WebView source={{ uri: inAppMessageUrl(accountId, siteName, campaignEnv, targetingParams) }} />
  )
}
