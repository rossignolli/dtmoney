import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GlobalStyle } from './styles/global'
import Modal from 'react-modal'
import { useState, version } from 'react';
import { NewTransactionModal } from './components/NewTransactionsModal';

Modal.setAppElement('#root');

export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

  function handleOpenNewTransactionsModal(){
      setIsNewTransactionModalOpen(true);
  }

  function handlecloseNewTransactionsModal(){
      setIsNewTransactionModalOpen(false)
  }


  return (
    <>
      <Header onOpenNewTransationModal={handleOpenNewTransactionsModal} />
        <Dashboard/>
        <NewTransactionModal
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handlecloseNewTransactionsModal}
        />
      <GlobalStyle/>
    </>
  );
}

export default App;


