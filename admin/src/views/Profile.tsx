import React from 'react';
import styled from 'styled-components';

import { View } from '../core-ui';
// import { useHistory } from 'react-router-dom';

export default function Profile() {
  // let history = useHistory();

  return (
    <Container>
      Profile Page
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
