import React, { ReactNode } from 'react';
import styled from 'styled-components';

import HeaderNavigationBar from '../components/layout/HeaderNavigationBar';
import { View } from '../core-ui';
import { LIGHTER_GRAY } from '../constants/colors';

type Props = {
  children: ReactNode;
};

const Container = styled(View)`
  min-height: 100vh;
  background-color:  ${LIGHTER_GRAY}
`;

export default function BasicLayout(props: Props) {
  return (
    <Container>
      <HeaderNavigationBar />
      {props.children}
    </Container>
  );
}
