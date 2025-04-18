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
  let titleContainerStyle = detail
    ? { minHeight: 55, padding: 15 }
    : { height: 37, paddingHorizontal: 8 };
  let iconStyle = detail
    ? { height: 28, width: 30 }
    : { height: 20, width: 22 };
  let titleStyle = detail ? { fontSize: 20 } : undefined;
  return (
    <View style={styles.container}>
      <View style={[styles.titleContainer, titleContainerStyle]}>
        <View style={styles.titleRow}>
          <Image
            source={hiddenStashIcon}
            resizeMode="contain"
            style={[styles.icon, iconStyle]}
          />
          <Text weight="bold" style={[styles.titleText, titleStyle]}>
            Hiddenstash
          </Text>
        </View>
        {detail && (
          <>
            <View style={styles.titleRow}>
              <Text weight="medium" style={{ color: WHITE }}>
                Find cheaper sources of any item!
              </Text>
            </View>
            <View style={styles.titleRow}>
              <Text style={{ color: ALT_TEXT_COLOR, fontSize: 12 }}>
                {`Enter the name and price of an item and we'll do the rest`}
              </Text>
            </View>
          </>
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
    elevation: 1,
    shadowColor: MEDIUM_LIGHT_GREY,
    shadowOpacity: 0.63,
    shadowOffset: { height: 0, width: 0 },
    shadowRadius: 10,
    flex: 1,
  },
  titleContainer: {
    backgroundColor: THEME_COLOR,
    justifyContent: 'center',
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
    paddingBottom: 15,
    backgroundColor: WHITE,
  },
  titleText: {
    color: WHITE,
  },
  footer: {
    backgroundColor: FOOTER_COLOR,
    justifyContent: 'flex-end',
    height: 70,
    padding: 14,
    flexDirection: 'row',
  },
});
