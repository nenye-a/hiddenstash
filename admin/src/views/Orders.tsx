import React from 'react';
import styled from 'styled-components';
import { FlatList } from 'react-native';

import { View, Text } from '../core-ui';
import { FONT_SIZE_NORMAL_PLUS, FONT_WEIGHT_BOLD } from '../constants/theme';
import { THEME_COLOR } from '../constants/colors';

import OrderCard from './Orders/OrderCard';
import { OrderItem } from './Orders/OrderItem';

// import { useHistory } from 'react-router-dom';

const ITEM_LIST: Array<OrderItem> = [
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71OHXdGg0DL._AC_SL1000_.jpg',
    name: 'Super long item that I want is not here today',
    purchasePrice: 9.99,
    status: 'Available',
    statusText: 'Item is available',
    orderMonth: 8,
    orderDay: 23,
    orderYear: 2020,
    orderType: 'Pickup',
  },
  {
    img:
      'https://images-na.ssl-images-amazon.com/images/I/71OHXdGg0DL._AC_SL1000_.jpg',
    name: 'My test Item list',
    purchasePrice: 9.99,
    status: 'Available',
    statusText: 'Item is available',
    orderMonth: 8,
    orderDay: 23,
    orderYear: 2020,
    orderType: 'Pickup',
  },
];

export default function Orders() {
  return (
    <Container>
      <OrdersContainer>
        <Title>Orders</Title>
        <FlatList
          data={ITEM_LIST}
          renderItem={({ item }: { item: OrderItem }) => {
            return <OrderCard orderItem={item} />;
          }}
        />
      </OrdersContainer>
    </Container>
  );
}

const Title = styled(Text)`
  color: ${THEME_COLOR};
  font-weight: ${FONT_WEIGHT_BOLD};
  font-size: ${FONT_SIZE_NORMAL_PLUS};
  margin: 12px 0;
`;

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const OrdersContainer = styled(View)`
  width: 700px;
`;
