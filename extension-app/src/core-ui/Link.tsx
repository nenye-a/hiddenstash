import React, { ReactNode } from 'react';

type Props = {
  to: string;
  children: ReactNode;
  target?: '_blank' | '_self';
};

export default function Link(props: Props) {
  let { children, to, target = '_blank' } = props;
  return (
    <a
      href={to}
      {...(target === '_blank' && { rel: 'noopener noreferrer' })}
      target={target}
      style={{ textDecoration: 'none' }}
    >
      {children}
    </a>
  );
}
