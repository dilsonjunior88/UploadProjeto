import { Card, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import Button from '@restart/ui/esm/Button';

const discionario = {
    first: 'Ínicio',
    next: 'Próximo',
    self: 'Atual',
    previous: 'Anterior',
    last: 'Fim'

  }

const DeputadosLista = ({ deputados, paginas, goTo }) => {
    return (
        <>
            <Row>
                {deputados.map(deputado => (
                    <Col key={deputado.id} md={2} className="mb-3">
                        <Link to={`/deputados/${deputado.id}`}>
                            <Card title={deputado.nome}>
                                <Card.Img variant="top"
                                    src={deputado.urlFoto}
                                />
                            </Card>
                        </Link>
                    </Col>
                ))}
            </Row>
            {paginas.map(pagina =>
                <Button onClick={goTo(pagina.href)}>{discionario[pagina.rel]}</Button>
            )}

        </>

    )
}

export default DeputadosLista