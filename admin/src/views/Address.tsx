import React from 'react';
import styled from 'styled-components';

import { View, Card } from '../core-ui';

import AddressForm from './AddressForm';

export default function Address() {
  return (
    <Container>
      <AddressCard>
        <FormContainer>
          <AddressForm />
        </FormContainer>
      </AddressCard>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const AddressCard = styled(Card)`
  width: 500px;
`;

const FormContainer = styled(View)`
  padding: 24px 12px;
`;
