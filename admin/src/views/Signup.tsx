import React from 'react';
import styled from 'styled-components';

import { View, Card } from '../core-ui';

import SignupForm from './SignupForm';

export default function Signup() {
  return (
    <Container>
      <SignupCard title="Sign up">
        <FormContainer>
          <SignupForm />
        </FormContainer>
      </SignupCard>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const SignupCard = styled(Card)`
  width: 500px;
`;

const FormContainer = styled(View)`
  padding: 24px 12px;
`;
