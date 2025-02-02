import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";

export function SearchForm() {
   const { register,handleSubmit } = useForm()

   function handleSeachTransactions()
    return (
        <SearchFormContainer onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="Buscar por Transações"
            {...register('query')} 
            />

            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar</button>
        </SearchFormContainer>

    )
}