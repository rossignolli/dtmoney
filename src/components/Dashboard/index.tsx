import { Summary } from "../Summary";
import { TransactionsTable } from "../TransationsTable";
import { Container } from "./styles";

export function Dashboard (){
    return (

        <Container>
            <Summary/>
            <TransactionsTable/>
        </Container>

    )
}