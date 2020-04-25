import React, { useReducer } from 'react';
import styled from 'styled-components';

import { View, Card, Text, Button } from '../core-ui';
import { FONT_SIZE_NORMAL_PLUS, FONT_WEIGHT_BOLD } from '../constants/theme';
import { THEME_COLOR, TEXT_COLOR } from '../constants/colors';
import addNewCardReducer, {
  initialNewCardState,
} from '../reducers/addNewCardReducer';

import AddNewCardForm from './Billing/AddNewCardForm';
import CreditCardTable from './Billing/CreditCardTable';

// import { useHistory } from 'react-router-dom';

export default function Billing() {
  // let history = useHistory();
  let [state, dispatch] = useReducer(addNewCardReducer, initialNewCardState);

  return (
    <Container>
      <BillingCard title="Billing">
        <ContentContainer>
          <Title>Existing Cards</Title>
          <CreditCardTable />
        </ContentContainer>
        <ContentContainer>
          <Title>Add New Card</Title>
          <AddNewCardForm state={state} dispatch={dispatch} />
          {/* TODO: on press push saved card state */}
          <SaveButton text="Save Card" type="submit" />
        </ContentContainer>
      </BillingCard>
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

const BillingCard = styled(Card)`
  width: 500px;
`;

const ContentContainer = styled(View)`
  padding: 20px 12px;
`;

const SaveButtonContainer = styled(View)`
  padding: 0px 12px;
`;

const SaveButton = styled(Button)`
  margin: 15px 0 10px 0;
  padding: 8px;
`;
