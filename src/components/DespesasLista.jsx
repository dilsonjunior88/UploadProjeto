import { Table } from "react-bootstrap"
import { dataBr } from "../util/formatter"

const DespesasLista = ({ despesas }) => {
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Data:</th>
                        <th>Tipo</th>
                        <th>Valor</th>
                        <th>Fornecedor</th>
                    </tr>
                </thead>
                <tbody>
                    {despesas.map(despesa => (
                        <tr>
                            <td>{dataBr(despesa.dataDocumento)}</td>
                            <td>{despesa.tipoDespesa}</td>
                            <td>{despesa.valorDocumento}</td>
                            <td>{despesa.nomeFornecedor}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </>

    )
}

export default DespesasLista


