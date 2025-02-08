import { createContext, ReactNode, useEffect, useState } from "react";

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
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const TransactionsContext = createContext({} as TransactionContextType);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transactions[]>([]);

  async function fetchTransactions(query?: string) {
    const url = new URL('http://localhost:3333/transactions');
    
    const response = await fetch(url);
    const data: Transactions[] = await response.json();

    // Se houver um termo de pesquisa, filtra os resultados pelo nome
    const filteredData = query
        ? data.filter(transaction => 
            transaction.description.toLowerCase().includes(query.toLowerCase())
        )
        : data;

    setTransactions(filteredData);
}


  useEffect(() => {
    fetchTransactions();
  }, []); // `fetchTransactions` nunca muda, então não precisa colocá-la nas dependências

  return (
    <TransactionsContext.Provider value={{ transactions, fetchTransactions }}>
      {children}
    </TransactionsContext.Provider>
  );
}
