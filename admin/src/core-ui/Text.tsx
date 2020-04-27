import styled from 'styled-components';

import { FONT_SIZE_NORMAL, FONT_FAMILY_NORMAL } from '../constants/theme';
import { TEXT_COLOR } from '../constants/colors';

type TextProps = ViewProps & {
  color?: string;
  textAlign?: string;
  fontSize?: string;
  fontFamily?: string;
  fontWeight?: string | number;
};

let Text = styled.span<TextProps>`
  box-sizing: border-box;
  display: inline;
  margin: 0;
  padding: 0;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  border: 0 solid black;
  border-image: initial;
  text-align: ${(props) => (props.textAlign ? props.textAlign : 'left')};
  color: ${(props) => (props.color ? props.color : TEXT_COLOR)};
  font-size: ${(props) => (props.fontSize ? props.fontSize : FONT_SIZE_NORMAL)};
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : FONT_FAMILY_NORMAL};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : 'normal')};
`;

export default Text;
