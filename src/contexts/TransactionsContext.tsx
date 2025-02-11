import {ReactNode, useEffect, useState } from "react";
import { api } from "../lib/axios";
import { createContext } from "use-context-selector";

interface Transactions {
  id: number;
  description: string;
  type: "income" | "outcome";
  price: number;
  category: string;
  createdAt: string;
}

interface TransactionContextType {
  transactions: Transactions[];
  fetchTransactions: (query?: string) => Promise<void>;
  createTransaction:(data:createTransactionInput) => Promise<void>;
}

interface TransactionsProviderProps {
  children: ReactNode;
}
interface createTransactionInput{
  description:string;
  price:number;
  category:string;
  type:'income' | 'outcome';
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function fetchTransactions(query?: string) {
    const response = await api.get("/transactions", {
      params: {
        _sort:'createdAt',
        _oder:'decre',
        q: query,
      },
    });
  
   
    const filteredData = query
      ? response.data.filter((transaction: Transactions) =>
          transaction.description.toLowerCase().includes(query.toLowerCase())
        )
      : response.data;

    setTransactions(filteredData);
  }
 async   function createTransaction(data:createTransactionInput){
  const { description, category, price, type } = data;

    const response = await api.post('/transactions', {
        description,
        category,
        price,
        type,
        createdAt: new Date(),
      });

        setTransactions( state =>[response.data,...state, ]);
    }

   useEffect(() => {
    fetchTransactions();
  }, []);

  return (
    <TransactionsContext.Provider value={{
       transactions, 
       fetchTransactions,
       createTransaction }}>
      {children}
    </TransactionsContext.Provider>
  );
}
