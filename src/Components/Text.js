/**
 * @format
 * @flow
 */

import * as React from 'react'
import { Text, StyleSheet } from 'react-native'

type Props = {
  size: "small" | "medium" | "large",
  children?: React.Node
};

const MyText = ({ size, children, style, ...textProps }: Props) =>
  <Text
    style={[Typography[size], ...style]}
    {...textProps}
  >
    {children}
  </Text>

MyText.defaultProps = {
  size: "medium",
  style: []
}

export default MyText

export const Typography = StyleSheet.create({
  small: {
    fontSize: 12
  },
  medium: {
    fontSize: 18
  },
  large: {
    fontSize: 24
  }
})
