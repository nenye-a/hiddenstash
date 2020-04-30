import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'exoflex';

import { LINK_COLOR, LIGHTER_GREY, WHITE } from '../constants/colors';
import Link from '../core-ui/Link';

type Props = {
  position: number;
  name?: string;
  price: string;
  url: string;
};

export default function Result(props: Props) {
  let { name, price, position, url } = props;
  let backgroundStyle = {
    backgroundColor: position % 2 === 1 ? LIGHTER_GREY : WHITE,
  };
  return (
    <View style={[styles.container, backgroundStyle]}>
      <View style={styles.content}>
        <View style={styles.flex}>
          <Link to={url}>
            <Text style={{ color: LINK_COLOR }}>{name ? name : url}</Text>
          </Link>
        </View>
        <View style={styles.priceContainer}>
          <Text weight="bold" style={styles.price}>
            {price || 'Price N/A'}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    width: 388,
    padding: 5,
  },
  content: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  priceContainer: {
    width: 80,
    marginLeft: 5,
  },
  price: { marginTop: 5, textAlign: 'right' },
  flex: {
    flex: 1,
  },
});
