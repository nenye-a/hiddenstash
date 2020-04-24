import React from 'react';
import { View, StyleSheet, Image, FlatList } from 'react-native';
import { Text, Checkbox, Button } from 'exoflex';

import CardLayout from '../components/CardLayout';
import { MUTED_TEXT_COLOR } from '../constants/colors';

const ITEM_LIST = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/81I92uYeOJL._AC_SL1500_.jpg',
    name: 'Duncan Imperial Yo-Yo - String Yo-Yo for Beginners',
    description: 'Searching stores nearby for your item',
    status: 'Pending',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/91Qfw%2BqIqKL._AC_SL1500_.jpg',
    name: 'MAGICYOYO Professional Responsive Yoyo V3',
    description: 'Similar Available For Delivery or Pickup Today',
    status: 'Pending',
  },
];
export default function CartScene() {
  return (
    <CardLayout>
      <FlatList
        data={ITEM_LIST}
        renderItem={({ item }) => {
          let { img, name, description, status } = item;
          return (
            <View style={styles.container}>
              <Image
                style={styles.image}
                source={{ uri: img }}
                resizeMode="contain"
              />
              <View style={[styles.flex, styles.leftMargin]}>
                <Text>{name}</Text>
                <Text style={styles.description}>{description}</Text>
              </View>
              <View>
                <Checkbox size={15} disabled />
                <Button compact style={{ marginVertical: 10 }}>
                  {status}
                </Button>
              </View>
            </View>
          );
        }}
      />
    </CardLayout>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: 10,
  },
  image: {
    width: 96,
    height: 96,
  },
  leftMargin: { marginLeft: 20 },
  description: {
    color: MUTED_TEXT_COLOR,
    marginTop: 5,
  },
});
