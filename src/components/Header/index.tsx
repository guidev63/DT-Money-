import logoImg from "../../assets/logo.svg";
import { HeaderContainer, HeaderContent, NewTrasactionButton } from "./styles";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoImg} alt="Logo da aplicação" />
        < NewTrasactionButton >Nova Transação</NewTrasactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}
