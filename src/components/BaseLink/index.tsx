import React from 'react';

import StyledLink, { IBaseLinkProps } from './styles';

interface IProps extends IBaseLinkProps {
  href?: string;
  target?: string;
  rel?: string;
  children?: React.ReactNode;
}

const BaseLink = React.forwardRef<HTMLAnchorElement, IProps>(
  (props, ref) => <StyledLink ref={ref as any} {...props} />,
);

export default BaseLink;
