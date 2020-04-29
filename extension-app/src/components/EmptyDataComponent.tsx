import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { THEME_COLOR } from '../constants/colors';

type Props = {
  text?: string;
};

export default function EmptyDataComponent({ text }: Props) {
  return (
    <View style={styles.root}>
      <Text style={{ color: THEME_COLOR }}>
        {text ? text : 'No Data Found'}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});
