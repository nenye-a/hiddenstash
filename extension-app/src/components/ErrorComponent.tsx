import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'exoflex';

import { THEME_COLOR } from '../constants/colors';

type Props = {
  text?: string;
  onRetry?: () => void;
};

export default function ErrorComponent({ text, onRetry }: Props) {
  return (
    <View style={styles.root}>
      <Text style={{ color: THEME_COLOR }}>
        {text ? text : 'An error has occurred. Please try again.'}
      </Text>
      <Button
        onPress={onRetry}
        style={styles.topMargin}
        contentStyle={styles.buttonContent}
      >
        Try Again
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  topMargin: {
    marginTop: 12,
  },
  buttonContent: {
    width: 120,
  },
});
