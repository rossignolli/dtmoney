
import Modal from 'react-modal'
import { Container, TransactionTypeContainer, RadioBox } from './styles'
import Closeable from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTranctionModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTranctionModalProps){

    const [title, setTitle] = useState('')
    const [value, setValue] = useState(0)
    const [category, setCategory] = useState('')

    const [type, setType] = useState('deposit');
    

     function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault()

        const data = {
            title, 
            value,
            category,
            type,
        };

        console.log(data);

         api.post('/transactions', data)

        // Parei em criar as transações
        
    }

    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        overlayClassName="react-modal-overlay"
        className="react-modal-content"
        >

            <button
             type="button"
             onClick={onRequestClose}
             className="react-modal-close"
              >
                <img src={Closeable} alt=""/>
            </button>

        <Container onSubmit={handleCreateNewTransaction} >
            <h2>Cadastrar Transação</h2>
            <input
             placeholder="Título"
             type="text"
             value={title}
             onChange={event => setTitle(event.target.value)}
             />

            <input
             placeholder="Valor"
             type="number"
             value={value}
             onChange={event => setValue(Number(event.target.value))}
             />

             <TransactionTypeContainer>
                 <RadioBox
                 type="button"
                 onClick={()=> setType('deposit') }
                 isActive={type ==='deposit'}
                 activeColor="green"
                 >
                     <img src={incomeImg} alt=""/>
                     <span>Entrada</span>
                 </RadioBox>
                 <RadioBox
                 type="button"
                 onClick={()=> setType('withdraw') }
                 isActive={type ==='withdraw'}
                 activeColor="red"
                 >
                     <img src={outcomeImg} alt=""/>
                     <span>Saída</span>
                 </RadioBox>
             </TransactionTypeContainer>

             <input
             placeholder="Categoria"
             type="text"
             value={category}
             onChange={event => setCategory(event.target.value)}
             />

             <button type="submit">
                 Cadastrar
             </button>
        </Container>
        </Modal>
    )
}

