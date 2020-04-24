import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { View, Card, Button, Text } from '../core-ui';

import LoginForm from './LoginForm';

export default function Login() {
  let history = useHistory();

  return (
    <Container>
      <LoginCard title="Login">
        <FormContainer>
          <LoginForm />
          <RowView>
            <Text> Forgot your password? </Text>
            <Button
              mode="transparent"
              text="Click here"
              onPress={() => {
                history.push('/'); // TODO: implement forget password w/ backend
              }}
            />
          </RowView>
        </FormContainer>
      </LoginCard>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LoginCard = styled(Card)`
  width: 500px;
`;

const FormContainer = styled(View)`
  padding: 24px 12px;
`;

const RowView = styled(View)`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
