import React from 'react';
import styled from 'styled-components';

import { View, Card } from '../core-ui';

import ProfileForm from './ProfileForm';

// import { useHistory } from 'react-router-dom';

export default function Profile() {
  // let history = useHistory();

  return (
    <Container>
      <ProfileCard title="Profile">
        <FormContainer>
          <ProfileForm />
        </FormContainer>
      </ProfileCard>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const ProfileCard = styled(Card)`
  width: 500px;
`;

const FormContainer = styled(View)`
  padding: 24px 12px;
`;
