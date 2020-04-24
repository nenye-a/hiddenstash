import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { TouchableOpacity, Text, Button, View } from '../../core-ui';
// import InsembleLogo from '../common/InsembleLogo';  TODO: needs to be converted to the hidden stash logo.
import {
  WHITE,
  HEADER_BORDER_COLOR,
  THEME_COLOR,
} from '../../constants/colors';
import { NAVBAR_HEIGHT, FONT_SIZE_LARGE } from '../../constants/theme';

// import { useCredentials } from '../../utils'; TODO: commented out until we have credentials

export default function HeaderNavigationBar() {
  let history = useHistory();

  return (
    <Container>
      <TouchableOpacity
        onPress={() => {
          history.push('/profile'); // TODO: make this go to profile by default
        }}
      >
        <Text color="white"> HIDDENSTASH </Text>
        {/* TODO: The above to be replaced with reall logo later */}
        {/* <InsembleLogo color="purple" /> */}
      </TouchableOpacity>
      {/* TODO: correct paths for the header buttons below. */}
      <RowView>
        <HeaderItem
          onPress={() => {
            history.push('/profile');
          }}
        >
          <Text color="white"> Profile </Text>
        </HeaderItem>
        <HeaderItem
          onPress={() => {
            history.push('/billing');
          }}
        >
          <Text color="white"> Billing </Text>
        </HeaderItem>
        <HeaderItem
          onPress={() => {
            history.push('/orders');
          }}
        >
          <Text color="white"> Orders </Text>
        </HeaderItem>
        <LogOut mode="secondary" text="Log out">
          onPress=
          {() => {
            history.push('/');
          }}
          <Text color="white"> Log Out </Text>
        </LogOut>
      </RowView>
    </Container>
  );
}

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: ${NAVBAR_HEIGHT};
  background-color: ${THEME_COLOR};
  box-shadow: 0px 1px 1px 0px ${HEADER_BORDER_COLOR};
  padding: 0px 32px;
  position: sticky;
  top: 0px;
  z-index: 99;
`;

const RowView = styled(View)`
  flex-direction: row;
  align-items: flex-end;
`;

const HeaderItem = styled(TouchableOpacity)`
  font-size: ${FONT_SIZE_LARGE};
  padding: 5px;
`;

const LogOut = styled(Button)`
  margin: 0 12px 0 5px;
  padding: 5px;
  background-color: ${WHITE};
  border-color: ${THEME_COLOR};
`;
