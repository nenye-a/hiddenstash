import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { TEXT_COLOR, LINK_COLOR } from '../constants/colors';

type Props = {
  position: number;
  name?: string;
  price: string;
  link: string;
};

export default function Result(props: Props) {
  let { name, price, position, link } = props;
  return (
    <View style={styles.container}>
      {/* a tag here for alignment purposes with link. */}
      <Text weight="bold" style={styles.number}>
        {position}.
      </Text>
      <View style={styles.content}>
        <a href={link} style={{ textDecoration: 'none' }}>
          <Text style={{ color: LINK_COLOR }}>{name ? name : link}</Text>
        </a>
        <Text weight="bold" style={{ marginTop: 5 }}>
          {price}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 388,
    marginBottom: 10,
  },
  number: {
    textAlignVertical: 'top',
    textAlign: 'left',
    maxWidth: '5%',
    flex: 1,
  },
  content: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    maxWidth: '95%',
    alignItems: 'flex-start',
    paddingHorizontal: 10,
  },
});
