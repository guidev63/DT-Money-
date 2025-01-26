import { MagnifyingGlass } from "phosphor-react";
import { SearchFormContainer } from "./styles";
export function SearchForm() {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Buscar por Transações" />
            <button type="submit">
                <MagnifyingGlass size={20} />
                Buscar</button>
        </SearchFormContainer>

    )
}