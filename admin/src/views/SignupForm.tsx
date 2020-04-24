import React, { useEffect } from 'react';
import styled from 'styled-components';


import { View, Form, TextInput, Button } from '../core-ui';

export default function SignupForm() {
  let textInputContainerStyle = { paddingTop: 6, paddingBottom: 6 }

  return (
    <Container>
      <Form>
        <TextInput
          name="email"
          label="Email"
          placeholder="Enter your email"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="password"
          placeholder="Enter password"
          label="Password"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="confirmPassword"
          placeholder="Confirm password"
          containerStyle={textInputContainerStyle}
        />
        <SubmitButton text="Submit" type="submit" />
      </Form>
    </Container>
  )
};

const Container = styled(View)`
  flex: 1;
  justify-content: center
`;

const SubmitButton = styled(Button)`
  margin: 15px 0 10px 0;
  padding: 8px;
`;
