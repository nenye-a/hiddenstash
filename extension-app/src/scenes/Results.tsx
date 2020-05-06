import React from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import { Text, Button } from 'exoflex';
import { useHistory } from 'react-router-dom';

import CardLayout from '../components/CardLayout';
import Result from '../components/Result';
import { SearchResult } from '../types/types';
import { LIGHTEST_GREY } from '../constants/colors';

export default function Results() {
  let history = useHistory<SearchResult>();
  let data = history.location.state;
  let cardFooter = (
    <Button
      onPress={() => {
        history.goBack();
      }}
      style={{ alignSelf: 'flex-end' }}
    >
      Back
    </Button>
  );
  return (
    <CardLayout footer={cardFooter}>
      <View style={styles.container}>
        <View style={styles.titleContainer}>
          <Text weight="bold">{data.name}</Text>
        </View>
        <Text style={styles.verticalMargin}>
          Found {data.result.length} results
        </Text>
        <FlatList
          keyExtractor={(_item, index) => index.toString()}
          data={data.result}
          renderItem={({ item }) => {
            return <Result {...item} />;
          }}
          contentContainerStyle={{
            padding: 4,
          }}
        />
      </View>
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  titleContainer: {
    width: '100%',
    alignItems: 'center',
    backgroundColor: LIGHTEST_GREY,
    paddingVertical: 12,
    paddingHorizontal: 18,
  },
  verticalMargin: { marginVertical: 10 },
});
