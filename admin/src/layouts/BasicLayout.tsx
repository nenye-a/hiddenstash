import React, { ReactNode } from 'react';
import styled from 'styled-components';

import HeaderNavigationBar from '../components/layout/HeaderNavigationBar';
import { View } from '../core-ui';

type Props = {
  children: ReactNode;
};

const Container = styled(View)`
  min-height: 100vh;
`;

export default function BasicLayout(props: Props) {
  return (
    <Container>
      <HeaderNavigationBar />
      {props.children}
    </Container>
  );
}
