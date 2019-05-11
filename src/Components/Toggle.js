/**
 *
 * @format
 * @flow
 */

import React from 'react'
import { View, Switch, StyleSheet } from 'react-native'

import Text from 'components/Text'

type Props = {
  on: string,
  off: string,
  value: boolean,
  onToggle: Function
};
export default ({ on, off, value, onToggle }: Props) => (
  <View style={styles.container}>
    <Text>{off}</Text>
    <Switch value={value} onValueChange={onToggle} style={styles.switch} />
    <Text>{on}</Text>
  </View>
)

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    alignSelf: "flex-end"
  },
  switch: {
    marginHorizontal: 5
  }
})
