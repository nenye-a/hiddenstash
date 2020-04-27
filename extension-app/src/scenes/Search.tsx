import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';

import CardLayout from '../components/CardLayout';
import { FOOTER_COLOR, GREY } from '../constants/colors';

export default function Search() {
  return (
    <CardLayout detail={true} footer={SearchFooter()}>
      <View style={styles.container}>
        <Text>Product Name </Text>
        <TextInput />
        <Text>Price </Text>
        <TextInput containerStyle={{ maxWidth: 120 }} />
      </View>
    </CardLayout>
  );
}

function SearchFooter() {
  return (
    <View style={styles.footer}>
      <Button
        onPress={() => {}}
        style={styles.secondaryFooterButton}
        labelStyle={styles.secondaryFooterText}
      >
        Back
      </Button>
      <Button onPress={() => {}} style={styles.primaryFooterButton}>
        Find
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  footer: {
    backgroundColor: FOOTER_COLOR,
    paddingLeft: 'auto',
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: 'auto',
    height: 70,
  },
  primaryFooterButton: {
    height: 40,
  },
  secondaryFooterButton: {
    height: 40,
    backgroundColor: 'transparent',
  },
  secondaryFooterText: {
    color: GREY,
  },
});
