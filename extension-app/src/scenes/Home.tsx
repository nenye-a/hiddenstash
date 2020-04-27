import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Checkbox, Button } from 'exoflex';
import styledArrow from '../../assets/styled-arrow.svg';

import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import { FOOTER_COLOR, GREY, WHITE } from '../constants/colors';

const ITEM_LIST = [
  {
    name: 'Old product name, limited in chars to fit in the modal',
    price: '$9.99',
    numResults: 10,
  },
  {
    name: 'Old product name, limited in chars to fit in the modal',
    price: '$9.99',
    numResults: 10,
  },
  {
    name: 'Old product name, limited in chars to fit in the modal',
    price: '$9.99',
    numResults: 10,
  },
];

export default function Home() {
  return (
    <CardLayout detail>
      <View style={styles.container}>
        <Button style={styles.button}>
          <View style={styles.buttonContent}>
            <Text weight="medium" style={{ color: WHITE, margin: 10 }}>
              New Search
            </Text>
            <Image
              source={styledArrow}
              resizeMode="contain"
              style={styles.arrow}
            />
          </View>
        </Button>
        <Text style={{ marginBottom: 10 }}>Previous Searches</Text>
        <FlatList
          data={ITEM_LIST}
          renderItem={({ item }) => {
            let { name, price, numResults } = item;
            return (
              <Summary
                name={name}
                price={price}
                numResults={numResults}
              ></Summary>
            );
          }}
        ></FlatList>
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    paddingHorizontal: 15,
    alignItems: 'center',
  },
  arrow: {
    height: 15,
    width: 25,
    marginLeft: 8,
  },
  button: {
    borderRadius: 20,
    width: 250,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 30,
  },
  buttonContent: {
    width: 250,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
