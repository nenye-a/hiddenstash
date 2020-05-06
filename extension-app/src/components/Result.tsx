import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'exoflex';

import {
  LINK_COLOR,
  WHITE,
  LIGHTEST_GREY,
  MUTED_TEXT_COLOR,
} from '../constants/colors';
import Link from '../core-ui/Link';
import { FONT_SIZE_SMALL } from '../constants/sizes';
import getDomain from '../utils/getDomain';

type Props = {
  name?: string;
  price: string;
  url: string;
  image?: string;
  description?: string;
};

export default function Result(props: Props) {
  let { name, price, url, image, description } = props;
  return (
    <View style={styles.container}>
      {image && (
        <Image
          source={{
            uri: image,
            width: 100,
            height: 108,
          }}
          resizeMode="contain"
          style={{ backgroundColor: WHITE }}
        />
      )}

      <View style={styles.rightContainer}>
        <Link to={url}>
          <Text numberOfLines={2} style={[styles.smallFont, styles.link]}>
            {name ? name : url}
          </Text>
        </Link>
        <View style={[styles.row, styles.middleTexts]}>
          <Text style={styles.smallFont} weight="bold">
            {price || 'Price N/A'}
          </Text>
          <Text style={[styles.smallFont, styles.horizontalMargin]}>•</Text>
          <Text weight="medium" style={[styles.smallFont, styles.mutedText]}>
            {getDomain(url)}
          </Text>
        </View>
        <Text
          weight="medium"
          style={[styles.smallFont, styles.mutedText]}
          numberOfLines={2}
        >
          {description}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: 388,
    height: 108,
    backgroundColor: LIGHTEST_GREY,
    marginVertical: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    borderRadius: 5,
  },
  row: {
    flexDirection: 'row',
  },
  mutedText: {
    color: MUTED_TEXT_COLOR,
  },
  rightContainer: {
    flex: 1,
    padding: 12,
  },
  middleTexts: { alignItems: 'center', marginVertical: 4 },
  horizontalMargin: {
    marginHorizontal: 12,
  },
  smallFont: {
    fontSize: FONT_SIZE_SMALL,
  },
  link: {
    color: LINK_COLOR,
  },
});
