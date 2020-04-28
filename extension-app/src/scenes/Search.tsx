import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useHistory } from 'react-router-dom';

import CardLayout from '../components/CardLayout';
import { GREY } from '../constants/colors';

export default function Search() {
  let [productName, setProductName] = useState('');
  let [price, setPrice] = useState('');
  let history = useHistory();

  let cardFooter = (
    <>
      <Button
        onPress={() => {
          history.push('/');
        }}
        preset="invisible"
        labelStyle={styles.secondaryFooterText}
      >
        Back
      </Button>
      <Button
        onPress={() => {
          history.push('/results');
        }}
      >
        Find
      </Button>
    </>
  );
  return (
    <CardLayout detail={true} footer={cardFooter}>
      <View style={styles.container}>
        <Text>Product Name </Text>
        <TextInput value={productName} onChangeText={setProductName} />
        <Text>Price </Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          containerStyle={{ maxWidth: 120 }}
        />
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 15,
  },
  secondaryFooterText: {
    color: GREY,
  },
});
