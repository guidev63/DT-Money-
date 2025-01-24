import { createContext } from "react";

interface Transactions{
id:number;
description:string;
type:'income' | 'outcome';
price:number;
category:string;
createdAt:string;
}

interface TransactionContextType{
    transactions:Transactions[];
}
const TransactionContext =  createContext<TransactionContextType>({
transactions: []

})