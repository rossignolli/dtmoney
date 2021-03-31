import { Container } from './styles';

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> Desenvolvimento de website</td>
                        <td className="deposit"> R$12.0000</td>
                        <td> Desenvolvimento</td>
                        <td> 20/03/2025</td>
                    </tr>
                    <tr>
                        <td> Assinatura Netflix</td>
                        <td className="withdraw">- R$54,00</td>
                        <td> Assinaturas</td>
                        <td> 14/03/2025</td>
                    </tr>
                   
                </tbody>
            </table>
        </Container>
    )
}