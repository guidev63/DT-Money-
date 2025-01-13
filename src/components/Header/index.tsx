import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
          <img src={logoImg} alt="Logo da aplicação" />
          <span style={{ color: "#fff", fontWeight: "bold", fontSize: "1.25rem" }}>
            DT Money
          </span>
        </div>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
