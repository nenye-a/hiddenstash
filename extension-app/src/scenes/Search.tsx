import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, TextInput, Button } from 'exoflex';
import { useHistory, Redirect } from 'react-router-dom';
import { useMutation } from 'react-fetching-library';

import { Form } from '../core-ui';
import CardLayout from '../components/CardLayout';
import { GREY } from '../constants/colors';

import { productLookup } from '../search/lookup';

export default function Search() {
  let id: string = Date.now().toString(); // TODO: use in management of product state
  let [productName, setProductName] = useState('');
  let [price, setPrice] = useState('');
  let history = useHistory();

  let { loading, payload, mutate } = useMutation(({ name, price }) => ({
    method: 'POST',
    endpoint: '/stashItem/add',
    body: {
      name,
      price,
    },
  }));

  let handleSubmit = async () => {
    // TODO: validate input
    mutate({ name: productName, price: Number(price) });
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
          <TextInput value={productName} onChangeText={setProductName} />
          <Text>Price </Text>
          <TextInput
            value={price}
            onChangeText={setPrice}
            containerStyle={{ maxWidth: 120 }}
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

const handleSubmit = (id: string, product: string, price: string) => {
  let source = 'https://www.amazon.com/';
  let searchQuery = { id, product, source, price };
  console.log(searchQuery);
  productLookup(searchQuery);
  // TODO: needs to use productLookup to generate search and return results.
};
