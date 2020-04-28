import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Button, ActivityIndicator } from 'exoflex';
import { useHistory } from 'react-router-dom';
import { useQuery } from 'react-fetching-library';

import styledArrow from '../../assets/styled-arrow.svg';
import CardLayout from '../components/CardLayout';
import Summary from '../components/Summary';
import { WHITE } from '../constants/colors';

export default function SearchHistory() {
  let history = useHistory();
  let { loading, payload } = useQuery({
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
        ) : (
          <FlatList
            data={payload}
            keyExtractor={(item) => item.name.toString()}
            renderItem={({ item }) => {
              let { name, price, numResults } = item;
              return (
                <Summary name={name} price={price} numResults={numResults} />
              );
            }}
            ListEmptyComponent={() => (
              <View>
                <Text>No Data Found</Text>
              </View>
            )}
          />
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
