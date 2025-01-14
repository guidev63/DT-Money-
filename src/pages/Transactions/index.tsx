import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "../components/SearchForm";
import {
  PriceHighlight,
  TransitionsContainer,
  TransitionsTable,
} from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />
      <TransitionsContainer>
        <SearchForm />
        <TransitionsTable>
          <tbody>
            <tr>
              <td>Desenvolvimento de site</td>
              <td>
                <PriceHighlight variant="income">
                  R$12.000,00
                </PriceHighlight>
              </td>
              <td>Vendas</td>
              <td>13/04/2022</td>
            </tr>
            <tr>
              <td>Hamburger</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 50,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2022</td>
            </tr>
          </tbody>
        </TransitionsTable>
      </TransitionsContainer>
    </div>
  );
}
