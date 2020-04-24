import React, { useEffect } from 'react';
import styled from 'styled-components';

import { View, Form, TextInput, Button } from '../core-ui';

export default function AddressForm() {
  let textInputContainerStyle = { paddingTop: 6, paddingBottom: 6 };

  return (
    <Container>
      <Form>
        <TextInput
          name="address"
          label="Address"
          placeholder="Enter your address"
          containerStyle={textInputContainerStyle}
        />
        <SubmitButton text="Continue" type="submit" />
      </Form>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

const SubmitButton = styled(Button)`
  margin: 15px 0 10px 0;
  padding: 8px;
`;
