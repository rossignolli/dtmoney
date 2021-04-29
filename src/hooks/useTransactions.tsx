import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { api } from '../services/api';


interface TransactionsData {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: string,
}

type TransactionInput = Omit<TransactionsData, 'id' | 'createdAt'>;


interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: TransactionsData[];
    createTransaction: (transaction: TransactionInput) => Promise<void>;
}

const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);


export function TransactionsProvider({children}: TransactionsProviderProps){

    const [transactions, setTransactions] = useState<TransactionsData[]>([])
 
    useEffect(()=>{
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    },[])

    async function createTransaction(transactionInput :TransactionInput ){
        const response = await api.post('/transactions', {
            ...transactionInput,
            createdAt: new Date(),
        })
        const {transaction} = response.data;
        setTransactions([...transactions, transaction])
    }


    return (
        <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
        </TransactionsContext.Provider>
    )

}

export function useTransactions (){
    const context = useContext(TransactionsContext);

    return context;
}