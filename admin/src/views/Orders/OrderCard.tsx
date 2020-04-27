import React from 'react';
import styled from 'styled-components';
import { Image } from 'react-native';

import { Card, View, Text } from '../../core-ui';
import { THEME_COLOR } from '../../constants/colors';
import { FONT_WEIGHT_BOLD, FONT_SIZE_LARGE } from '../../constants/theme';

import { OrderItem } from './OrderItem';

type Props = {
  orderItem: OrderItem;
};

export default function OrderCard(props: Props) {
  // TODO: use 'status' to influence the color of the items.
  let {
    img,
    name,
    purchasePrice,
    statusText,
    orderMonth,
    orderDay,
    orderYear,
    orderType,
  } = props.orderItem;

  return (
    <StyledCard>
      <OrderCardContainer>
        <OrderImage source={{ uri: img }} />
        <OrderDetailView>
          <ItemName>{name}</ItemName>
          <Price>${purchasePrice}</Price>
          <OrderText>{orderType}</OrderText>
        </OrderDetailView>
        <OrderDetailView>
          <OrderText textAlign={'right'}>
            Ordered: {orderMonth}/{orderDay}/{orderYear}
          </OrderText>
          <OrderText textAlign={'right'}>Status: {statusText}</OrderText>
        </OrderDetailView>
      </OrderCardContainer>
    </StyledCard>
  );
}

const StyledCard = styled(Card)`
  margin: 10px 0px;
`;

const OrderText = styled(Text)`
  font-size: ${FONT_SIZE_LARGE};
  margin: 12px 0;
`;

const ItemName = styled(OrderText)`
  color: ${THEME_COLOR};
  font-weight: ${FONT_WEIGHT_BOLD};
`;

const OrderCardContainer = styled(View)`
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px;
`;

const OrderDetailView = styled(View)`
  margin: 0 0 0 12px;
  flex: auto;
  max-width: 250px;
`;

const Price = styled(Text)`
  font-weight: ${FONT_WEIGHT_BOLD};
  font-color: black;
`;

const OrderImage = styled(Image)`
  width: 120px;
  height: 120px;
`;
