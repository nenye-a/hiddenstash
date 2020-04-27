import React, { ReactNode } from 'react';
import { View, ScrollView, StyleSheet, Image } from 'react-native';
import { Text } from 'exoflex';

import hiddenStashIcon from '../../assets/hiddenstash-white-logo.svg';
import {
  THEME_COLOR,
  WHITE,
  ALT_TEXT_COLOR,
  MEDIUM_LIGHT_GREY,
  FOOTER_COLOR,
} from '../constants/colors';

type Props = {
  detail?: boolean;
  children?: ReactNode;
  footer?: ReactNode;
};

export default function CardLayout(props: Props) {
  let { detail, children, footer } = props;
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <View style={styles.titleRow}>
          <Image
            source={hiddenStashIcon}
            resizeMode="contain"
            style={styles.icon}
          />
          <Text weight="bold" style={styles.titleText}>
            Hiddenstash
          </Text>
        </View>
        {detail ? (
          <>
            <View style={styles.titleRow}>
              <Text weight="medium" style={{ color: WHITE }}>
                Find cheaper sources of any item!
              </Text>
            </View>
            <View style={styles.titleRow}>
              <Text style={{ color: ALT_TEXT_COLOR, fontSize: 12 }}>
                Enter the name and price of an item and we'll do the rest
              </Text>
            </View>
          </>
        ) : (
          <></>
        )}
      </View>
      <ScrollView style={styles.content}>{children}</ScrollView>
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    borderRadius: 5,
    backgroundColor: 'transparent',
    // May need to remove the following after devleopment and restrict size using iframe container.
    height: 470,
    width: 415,
    elevation: 1,
    shadowColor: MEDIUM_LIGHT_GREY,
    shadowOpacity: 0.63,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 20,
  },
  titleContainer: {
    minHeight: 55,
    backgroundColor: THEME_COLOR,
    padding: 15,
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  titleRow: {
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 28,
    width: 30,
    marginRight: 8,
  },
  content: {
    overflow: 'scroll',
    marginBottom: 15,
  },
  titleText: {
    color: WHITE,
    fontSize: 20,
  },
  footer: {
    backgroundColor: FOOTER_COLOR,
    justifyContent: 'flex-end',
    height: 70,
    padding: 14,
    flexDirection: 'row',
  },
});
