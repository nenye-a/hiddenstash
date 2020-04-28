import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button } from 'exoflex';
import { useHistory } from 'react-router-dom';

import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import Result from '../components/Result';

// TOOD: add type

type Result = {
  url: string;
  price: number;
};

type Results = {
  name: string;
  price: number;
  result: Array<Result>;
};

export default function Results() {
  let history = useHistory<Results>();
  let data = history.location.state;
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
          name={data.name}
          price={data.price}
          numResults={data.result.length}
        />
        <Text style={{ marginTop: 10, marginBottom: 10 }}>
          Found {data.result.length} results
        </Text>
        <FlatList
          keyExtractor={(_item, index) => index.toString()}
          data={data.result}
          renderItem={({ item, index }) => {
            return <Result position={index + 1} name={data.name} {...item} />;
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
