import React, { useEffect } from 'react';
import styled from 'styled-components';

import { View, Form, TextInput, Button } from '../core-ui';

export default function ProfileForm() {
  let textInputContainerStyle = { paddingTop: 6, paddingBottom: 6 };

  return (
    <Container>
      <Form>
        <TextInput
          name="address"
          label="Address"
          placeholder="Your Address"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="email"
          label="Email"
          placeholder="Your Email"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="currentPassword"
          placeholder="Current password"
          label="Change Password"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="newPassword"
          placeholder="New password"
          containerStyle={textInputContainerStyle}
        />
        <TextInput
          name="email"
          placeholder="Confirm new password"
          containerStyle={textInputContainerStyle}
        />
        <SaveButton text="Save Changes" type="submit" />
      </Form>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
`;

const SaveButton = styled(Button)`
  margin: 15px 0 10px 0;
  padding: 8px;
`;
