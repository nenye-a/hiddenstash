import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Checkbox, Button } from 'exoflex';

import CardLayout from '../components/CardLayout';
import { FOOTER_COLOR, GREY } from '../constants/colors';

export default function Home() {
  return <CardLayout footer={HomeFooter()}></CardLayout>;
}

function HomeFooter() {
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
  footer: {
    backgroundColor: FOOTER_COLOR,
    paddingLeft: 'auto',
    paddingRight: 15,
    paddingTop: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    width: 'auto',
    height: 70,
  },
  primaryFooterButton: {
    height: 40,
    alignSelf: 'center', // For some reason, chile needs to selfalign, instead of using footer flex alignContent
  },
  secondaryFooterButton: {
    height: 40,
    backgroundColor: 'transparent',
    alignSelf: 'center',
  },
  secondaryFooterText: {
    color: GREY,
  },
});
