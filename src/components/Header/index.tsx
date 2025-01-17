import logoImg from "../../assets/logo.svg";
import { NewTransactionModal } from "../NewTransactionModal";
import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import * as Dialog from '@radix-ui/react-dialog';
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
        <Dialog.Root >
          <Dialog.Trigger  asChild>
        <NewTransactionButton>Nova Transação</NewTransactionButton>
        </Dialog.Trigger>
          <NewTransactionModal />
        </Dialog.Root>

      </HeaderContent>
    </HeaderContainer>
  );
}
