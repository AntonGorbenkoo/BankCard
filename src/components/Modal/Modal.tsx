import { FC, ReactNode } from 'react';
import classes from './Modal.module.sass';

export interface ModalProps {
  active: boolean;
  setActive: Function;
  children: ReactNode;
}

export interface ModalComponent extends FC<ModalProps> {}
export const Modal: ModalComponent = ({ active, setActive, children }) => {
  const handleChangeVisible = () => {
    setActive(false);
    console.log(active);
  };

  return (
    <div className={classes.wrapper} onClick={handleChangeVisible}>
      <div className={classes.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};
