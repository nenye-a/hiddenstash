import React from 'react';
import styled from 'styled-components';

import { TouchableOpacity, Text, View } from '../../core-ui';
// import InsembleLogo from '../common/InsembleLogo';  TODO: needs to be converted to the hidden stash logo.
import { HEADER_BORDER_COLOR, THEME_COLOR } from '../../constants/colors';
import { NAVBAR_HEIGHT } from '../../constants/theme';

// import { useCredentials } from '../../utils'; TODO: commented out until we have credentials

export default function MinimalHeader() {

  return (
    <Container>
      <TouchableOpacity>
        <Text color='white'> HIDDENSTASH </Text>
        {/* TODO: The above to be replaced with real logo later */}
        {/* <InsembleLogo color="purple" /> */}
      </TouchableOpacity>
    </Container>
  );
}

const Container = styled(View)`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: ${NAVBAR_HEIGHT};
  background-color: ${THEME_COLOR};
  box-shadow: 0px 1px 1px 0px ${HEADER_BORDER_COLOR};
  padding: 0px 32px;
  position: sticky;
  top: 0px;
  z-index: 99;
`;
