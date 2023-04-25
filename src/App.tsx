import React, { useState } from 'react';
import classes from './App.module.sass';
import { Button } from './assets/components/Button/Button';
import { Modal } from './components/Modal/Modal';
import { BankCard } from './components/BankCard/BankCard';

function App() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  const handleClick = () => {
    setModalVisible(true);
  };

  return (
    <div className={classes.App}>
      {modalVisible ? (
        <Modal active={modalVisible} setActive={setModalVisible}>
          {<BankCard />}
        </Modal>
      ) : (
        <Button className={classes.button} onClick={handleClick}>
          PAY NOW
        </Button>
      )}
    </div>
  );
}

export default App;
