import React, { ReactNode, FormEvent } from 'react';

type Props = {
  children: ReactNode;
  onSubmit: () => void;
};

export default function Form(props: Props) {
  let { children, onSubmit, ...otherProps } = props;
  return (
    <form
      onSubmit={(e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onSubmit && onSubmit();
      }}
      {...otherProps}
    >
      {children}
      <button type="submit" style={{ visibility: 'hidden' }}>
        Submit
      </button>
    </form>
  );
}
