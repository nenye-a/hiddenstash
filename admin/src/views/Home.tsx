import React from 'react';
import styled from 'styled-components';

import { View, Text, Card, RadioButton } from '../core-ui';
// import { useHistory } from 'react-router-dom';

export default function Home() {
  // let history = useHistory();

  return (
    <Container>
      <Text>Home</Text>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
