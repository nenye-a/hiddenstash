import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useHistory } from 'react-router-dom';

import CardLayout from '../components/CardLayout';
import { GREY } from '../constants/colors';

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
  let history = useHistory();

  return (
    <>
      <Button
        onPress={() => {
          history.push('/');
        }}
        style={styles.secondaryFooterButton}
        labelStyle={styles.secondaryFooterText}
      >
        Back
      </Button>
      <Button
        onPress={() => {
          history.push('/results');
        }}
        style={styles.primaryFooterButton}
      >
        Find
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
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
