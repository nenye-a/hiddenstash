import React, { ReactNode } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Text } from 'exoflex';

import hiddenStashIcon from '../../assets/hiddenstash-icon.svg';
import { THEME_COLOR, WHITE } from '../constants/colors';

type Props = {
  children?: ReactNode;
  footer?: ReactNode;
};

export default function CardLayout(props: Props) {
  let { children, footer } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Image
          source={hiddenStashIcon}
          resizeMode="contain"
          style={styles.icon}
        />
        <Text style={styles.whiteText}>Hidden Stash Cart</Text>
      </View>
      <View style={styles.content}>{children}</View>
      <View style={styles.footer}>{footer}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: 'transparent',
  },
  titleContainer: {
    height: 34,
    backgroundColor: THEME_COLOR,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: { height: 20, width: 20, marginRight: 8 },
  content: {
    overflow: 'scroll',
    height: 250,
  },
  whiteText: {
    color: WHITE,
  },
  footer: {
    height: 34,
  },
});
