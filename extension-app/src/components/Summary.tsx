import React, { ReactNode } from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { GREEN, TEXT_COLOR, LIGHTER_GREY } from '../constants/colors';

type Props = {
  name: string;
  price: string;
  numResults?: number;
};

export default function Summary(props: Props) {
  let { name, price, numResults } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text weight="bold" style={{ color: TEXT_COLOR }}>
          {name}
        </Text>
      </View>
      <View style={styles.content}>
        <Text weight="bold" style={{ color: GREEN }}>
          {props.price}
        </Text>
        <View style={styles.resultContainer}>
          <Text weight="bold" style={{ color: TEXT_COLOR }}>
            Results:
          </Text>
          <Text style={{ marginLeft: 5, color: TEXT_COLOR }}>{numResults}</Text>
        </View>
      </View>
    </View>
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
