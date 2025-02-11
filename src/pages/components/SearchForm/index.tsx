import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";
/**
 *  Porque que um componente renderiza?
 * 
 * -Hooks changed (mudou estado, contexto, reducer);
 * - Props changed (mudou propriedades);
 * - parent rerendered (componente paí renderizou);
 * 
 * - Qual o fluxo  de renderização ?
 * 
 * 1. O React  recria o Html da interface daquele componente
 * 2.  Compara a versão do HTML recriada com a versão anterior 
 * 3. SE Mudou alguma coisa ,ele reescreve o HTML na tela 
 * memo : 
 * 0. Hooks changed , Props changed (deep comparison) 
 * 0.1 : comparar a versão anterior dos hooks e props 
 * 0.2 :  SE  mudou algo , ele vai permitir e nova  renderização 
 * 
 * 
 */

const SearchFormSchema = z.object({
  query: z.string(),
});

type SearchFormInputs = z.infer<typeof SearchFormSchema>;

export function SearchForm() {
  const  fetchTransactions  = useContextSelector(TransactionsContext,(context)=>{
    return context.fetchTransactions
  });

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormInputs>({
    resolver: zodResolver(SearchFormSchema),
  });

  async function handleSearchTransactions(data: SearchFormInputs) {
    await fetchTransactions(data.query);
}

  return (
    <SearchFormContainer onSubmit={handleSubmit(handleSearchTransactions)}>
      <input
        type="text"
        placeholder="Buscar por Transações"
        {...register("query")}
      />

      <button type="submit" disabled={isSubmitting}>
        <MagnifyingGlass size={20} />
        {isSubmitting ? "Buscando..." : "Buscar"}
      </button>
    </SearchFormContainer>
  );
}

