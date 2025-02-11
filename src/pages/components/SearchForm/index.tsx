import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { TransactionsContext } from "../../../contexts/TransactionsContext";
import { useContextSelector } from "use-context-selector";

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
