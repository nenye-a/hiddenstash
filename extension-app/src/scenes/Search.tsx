import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useHistory, Redirect } from 'react-router-dom';
import { useMutation } from 'react-fetching-library';

import { Form } from '../core-ui';
import CardLayout from '../components/CardLayout';
import { GREY } from '../constants/colors';
import { SearchResult, AddStashItemVariables } from '../types/types';
import validateNumber from '../helpers/validateNumber';

export default function Search() {
  let [productName, setProductName] = useState('');
  let [price, setPrice] = useState('');
  let [error, setError] = useState({
    productName: '',
    price: '',
  });
  let history = useHistory();

  let { loading, payload, mutate } = useMutation<
    SearchResult,
    {},
    AddStashItemVariables
  >(({ name, price, source }) => ({
    method: 'POST',
    endpoint: '/stashItem/add',
    body: {
      name,
      price,
      source,
    },
  }));

  let validate = () => {
    let isProductEmpty = productName === '';
    let isPriceEmpty = price === '';
    let allInputNotEmpty = !(isProductEmpty || isPriceEmpty);
    let isPriceValid = validateNumber(price);
    let allInputValid = allInputNotEmpty && isPriceValid;
    if (allInputValid) {
      mutate({
        name: productName.trim(),
        price: Number(price),
        source: window.location.ancestorOrigins[0],
      });
    }

    let productError = isProductEmpty ? 'Please fill in product name' : '';
    let priceError = isPriceEmpty
      ? 'Please fill in the price'
      : !isPriceValid
      ? 'Invalid price'
      : '';
    setError({
      productName: productError,
      price: priceError,
    });
  };

  let handleSubmit = () => {
    validate();
  };

  let cardFooter = (
    <>
      <Button
        onPress={() => {
          history.goBack();
        }}
        preset="invisible"
        labelStyle={styles.secondaryFooterText}
      >
        Back
      </Button>
      <Button
        onPress={() => {
          handleSubmit();
        }}
        loading={loading}
      >
        Find
      </Button>
    </>
  );

  if (payload) {
    return <Redirect to={{ pathname: '/results', state: payload }} />;
  }

  return (
    <CardLayout detail={true} footer={cardFooter}>
      <Form onSubmit={handleSubmit}>
        <View style={styles.container}>
          <Text>Product Name </Text>
          <TextInput
            value={productName}
            onChangeText={setProductName}
            errorMessage={error.productName}
          />
          <Text>Price </Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            containerStyle={{ maxWidth: 120 }}
            errorMessage={error.price}
          />
        </View>
      </Form>
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
