import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { Text } from 'exoflex';
import { useHistory } from 'react-router-dom';

import { GREEN, LIGHTER_GREY } from '../constants/colors';
import { SearchRecommendation } from '../types/types';

type Props = {
  name: string;
  price: string;
  result: Array<SearchRecommendation>;
};

export default function Summary(props: Props) {
  let { name, price, result } = props;
  let history = useHistory();

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => {
        history.push('/results', {
          name,
          price,
          result,
        });
      }}
    >
      <View style={styles.titleContainer}>
        <Text weight="bold">{name}</Text>
      </View>
      <View style={styles.content}>
        <Text weight="bold" style={{ color: GREEN }}>
          {price}
        </Text>
        <View style={styles.resultContainer}>
          <Text weight="bold">Results:</Text>
          <Text style={{ marginLeft: 5 }}>{result.length}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: 'transparent',
    height: 90,
    width: 388,
    shadowColor: 'black',
    shadowOpacity: 0.16,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 6,
    margin: 6,
  },
  titleContainer: {
    minHeight: '50%',
    height: '50%',
    backgroundColor: LIGHTER_GREY,
    paddingHorizontal: 10,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    minHeight: '50%',
    height: '50%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  resultContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: 78,
  },
});
