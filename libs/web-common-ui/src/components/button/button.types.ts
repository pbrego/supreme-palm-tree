import type { ReactNode } from 'react';

export type ButtonProps = {
  children?: ReactNode;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
};
