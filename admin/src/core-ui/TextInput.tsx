import React, { ComponentProps, forwardRef, Ref, CSSProperties } from 'react';
import styled, { css } from 'styled-components';

import {
  FONT_FAMILY_NORMAL,
  FONT_SIZE_NORMAL,
  DEFAULT_BORDER_RADIUS,
  FONT_SIZE_SMALL,
} from '../constants/theme';
import {
  TEXT_INPUT_BORDER_COLOR,
  TEXT_COLOR,
  DISABLED_TEXT_INPUT_BACKGROUND,
  RED_TEXT,
  THEME_COLOR,
} from '../constants/colors';
// import useID from '../utils/useID';

import Label from './Label';
import View from './View';
import Text from './Text';

type InputProps = ComponentProps<'input'> & {
  isError?: boolean;
};

type TextInputProps = Omit<InputProps, 'onSubmit'> & {
  onSubmit?: () => void;
  containerStyle?: CSSProperties;
};

type Props = TextInputProps & {
  label?: string;
  errorMessage?: string;
};

export default forwardRef(
  (props: Props, forwardedRef: Ref<HTMLInputElement>) => {
    let {
      id: providedID,
      label,
      onSubmit,
      ref,
      disabled,
      containerStyle,
      errorMessage,
      ...otherProps
    } = props;

    // Removing reliance on fall back ID for short term.
    // let fallbackID = useID();
    // let id = providedID || fallbackID;
    let id = providedID;
    let isError = !!errorMessage;
    return (
      <View style={containerStyle}>
        {label && (
          <LabelWrapper
            color={isError ? RED_TEXT : THEME_COLOR}
            id={id}
            text={label}
          />
        )}
        <InputBox
          id={id}
          type="text"
          ref={forwardedRef}
          isError={isError}
          onKeyPress={(event) => {
            if (
              event.which === 13 &&
              !event.metaKey &&
              !event.ctrlKey &&
              !event.shiftKey
            ) {
              onSubmit && onSubmit();
            }
          }}
          disabled={disabled}
          {...otherProps}
        />
        {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
      </View>
    );
  },
);

const LabelWrapper = styled(Label)`
  padding-bottom: 8px;
`;

const InputBox = styled.input<InputProps>`
  padding: 8px 12px;
  height: 36px;
  color: ${TEXT_COLOR};
  border: ${({ isError }) =>
    isError ? `solid 1px ${RED_TEXT}` : `solid 1px ${TEXT_INPUT_BORDER_COLOR}`};
  border-radius: ${DEFAULT_BORDER_RADIUS};
  display: block;
  width: 100%;
  box-sizing: border-box;
  font-family: ${FONT_FAMILY_NORMAL};
  font-size: ${FONT_SIZE_NORMAL};
  ${(props) =>
    props.disabled &&
    css`
      background-color: ${DISABLED_TEXT_INPUT_BACKGROUND};
    `}
`;

const ErrorMessage = styled(Text)`
  font-size: ${FONT_SIZE_SMALL};
  color: ${RED_TEXT};
  margin-top: 6px;
`;
