import { FC, MouseEventHandler, useMemo } from 'react';
import classes from './Button.module.sass';
import clsx from 'clsx';

export interface ButtonProps {
  // type?: string;
  className?: string;
  children?: string;
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

export interface ButtonComponent extends FC<ButtonProps> {}

export const Button: ButtonComponent = ({ className, children, onClick }) => {
  const wrapperClassName = useMemo(
    () => clsx(classes.wrapper, className),
    [className]
  );

  return (
    <button className={wrapperClassName} onClick={onClick}>
      {children}
    </button>
  );
};
