import { useEffect, useState } from 'react'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from "react-router-dom";
import apiCamaraDeputados from '../../services/apiCamara';
import Button from '@restart/ui/esm/Button';



const Partidos = () => {

    const [partidos, setPartidos] = useState([])
    const [paginas, setPaginas] = useState([])
    const goTo = href => () => {

        apiCamaraDeputados.get(href).then(resultado => {


            setPartidos(resultado.data.dados)

            setPaginas(resultado.data.links)
        })

    }
    const discionario = {
        first: 'Ínicio',
        next: 'Próximo',
        self: 'Atual',
        previous: 'Anterior',
        last: 'Fim'

    }

    useEffect(() => {
        goTo(`/partidos`)()

    }, [])
    return (
        <>
            <Row>
                {partidos.map(partido => (
                    <Col key={partido.id} md={5} className="mb-3">
                        <Link to={`/partidos/${partido.id}`}>
                            <Card title={partido.nome}>
                                <p>{partido.sigla}</p>

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

export default Partidos