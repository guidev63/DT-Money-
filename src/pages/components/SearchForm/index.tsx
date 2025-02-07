import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from 'zod';
import { zodResolver } from "@hookform/resolvers/zod";

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const { 
    register,
    handleSubmit,
    formState: { isSubmitting }, 

  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

   async function handleSearchTransactions(data: SearchFormInputs) {

    console.log(data);
  }

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar por Transações"
        {...register('query')}
      />

      <button type="submit" disabled={isSubmitting}> {/* Desabilitar botão enquanto envia */}
        <MagnifyingGlass size={20} />
        {isSubmitting ? 'Buscando...' : 'Buscar'} {/* Feedback visual */}
      </button>
    </SearchFormContainer>
  );
}
