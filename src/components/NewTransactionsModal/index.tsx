import React from "react";
import { version } from "react-dom";
import Modal from 'react-modal'



interface NewTranctionModalProps {
    isOpen: boolean;
    onRequestClose: ()=> void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTranctionModalProps){
    return (
        <Modal 
        isOpen={isOpen}
        onRequestClose={onRequestClose}
        >
        <h2>Cadastrar Transação</h2>
        </Modal>
    )
}

