import * as React from 'react';

type LayoutProps = {
  children?: React.ReactNode;
  className?: string;
};

export const FlexRow = ({ children, className = '' }: LayoutProps) => (
  <div className={`l-flex-row ${className}`}>{children}</div>
);

export const FlexColumn = ({ children, className = '' }: LayoutProps) => (
  <div className={`l-flex-column ${className}`}>{children}</div>
);
