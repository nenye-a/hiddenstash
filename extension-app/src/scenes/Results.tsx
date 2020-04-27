import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Checkbox, Button } from 'exoflex';
import styledArrow from '../../assets/styled-arrow.svg';

import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import Result from '../components/Result';
import { FOOTER_COLOR, GREY, WHITE } from '../constants/colors';

const RESULT_LIST = [
  {
    position: 1,
    name: 'Old product name, limited in chars to fit in the modal',
    link:
      'https://www.amazon.com/Yomega-Raider-Responsive-Designed-Advanced/dp/B07KRL7GTR/ref=sr_1_1_sspa?dchild=1&keywords=yoyo&qid=1587943423&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExU002WEdKVFA0R0xMJmVuY3J5cHRlZElkPUEwMzExOTAxMVM1Q1oyT0JONUlKUyZlbmNyeXB0ZWRBZElkPUEwNTUwNTYwWlBFTzQ3RzVMTUZIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    price: '$10',
  },
  {
    position: 2,
    name: 'Old product name, limited in chars to fit in the modal',
    link:
      'https://www.amazon.com/Yomega-Raider-Responsive-Designed-Advanced/dp/B07KRL7GTR/ref=sr_1_1_sspa?dchild=1&keywords=yoyo&qid=1587943423&sr=8-1-spons&psc=1&spLa=ZW5jcnlwdGVkUXVhbGlmaWVyPUExU002WEdKVFA0R0xMJmVuY3J5cHRlZElkPUEwMzExOTAxMVM1Q1oyT0JONUlKUyZlbmNyeXB0ZWRBZElkPUEwNTUwNTYwWlBFTzQ3RzVMTUZIJndpZGdldE5hbWU9c3BfYXRmJmFjdGlvbj1jbGlja1JlZGlyZWN0JmRvTm90TG9nQ2xpY2s9dHJ1ZQ==',
    price: '$10',
  },
];

const SUMMARY = {
  name: 'Old product name, limited in chars to fit in the modal',
  price: '$9.99',
  numResults: 10,
};

export default function Results() {
  return (
    <CardLayout>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>Showing results for</Text>
        <Summary
          name={SUMMARY.name}
          price={SUMMARY.price}
          numResults={SUMMARY.numResults}
        ></Summary>
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          Found {RESULT_LIST.length} results
        </Text>
        <FlatList
          data={RESULT_LIST}
          renderItem={({ item }) => {
            return <Result {...item} />;
          }}
        ></FlatList>
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
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
