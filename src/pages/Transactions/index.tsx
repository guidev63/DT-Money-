import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";

 export function Transactions(){
    return(
        <div>
            <Header />
            <Summary />
            <table>
                <tbody>
                    <tr>
                        <td width="50%">Desenvolvimento de site</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
 }