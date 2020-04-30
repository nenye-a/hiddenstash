import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Button, ActivityIndicator } from 'exoflex';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';

import styledArrow from '../../assets/styled-arrow.svg';
import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import ErrorComponent from '../components/ErrorComponent';
import EmptyDataComponent from '../components/EmptyDataComponent';
import { WHITE } from '../constants/colors';
import { SearchResult } from '../types/types';

export default function SearchHistory() {
  let history = useHistory();
  let { loading, payload, query } = useQuery<Array<SearchResult>>({
    endpoint: '/stashItem',
    method: 'GET',
  });

  return (
    <CardLayout detail>
      <View style={styles.container}>
        <Button
          style={styles.button}
          contentStyle={{ width: 250 }}
          onPress={() => {
            history.push('/search');
          }}
        >
          <Text weight="medium" style={[styles.whiteText, styles.rightMargin]}>
            New Search
          </Text>
          <Image
            source={styledArrow}
            resizeMode="contain"
            style={styles.arrow}
          />
        </Button>
        <Text style={styles.bottomMargin}>Previous Searches</Text>
        {loading ? (
          <ActivityIndicator />
        ) : payload ? (
          <FlatList
            data={payload}
            keyExtractor={(item, index) => item.name + index.toString()}
            renderItem={({ item }) => {
              let { name, price, result } = item;
              return <Summary name={name} price={price} result={result} />;
            }}
            ListEmptyComponent={EmptyDataComponent}
          />
        ) : (
          <ErrorComponent onRetry={query} />
        )}
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
    marginBottom: 30,
    paddingHorizontal: 5,
  },
  bottomMargin: {
    marginBottom: 10,
  },
  whiteText: {
    color: WHITE,
  },
  rightMargin: {
    marginRight: 5,
  },
});
