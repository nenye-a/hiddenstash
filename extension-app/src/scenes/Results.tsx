import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button } from 'exoflex';
import { useHistory } from 'react-router-dom';

import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import Result from '../components/Result';

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
  let history = useHistory();

  let cardFooter = (
    <Button
      onPress={() => {
        history.push('/search');
      }}
      style={{ alignSelf: 'flex-end' }}
    >
      Back
    </Button>
  );
  return (
    <CardLayout footer={cardFooter}>
      <View style={styles.container}>
        <Text style={{ marginBottom: 10 }}>Showing results for</Text>
        <Summary
          name={SUMMARY.name}
          price={SUMMARY.price}
          numResults={SUMMARY.numResults}
        />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          Found {RESULT_LIST.length} results
        </Text>
        <FlatList
          data={RESULT_LIST}
          renderItem={({ item }) => {
            return <Result {...item} />;
          }}
        />
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
});
