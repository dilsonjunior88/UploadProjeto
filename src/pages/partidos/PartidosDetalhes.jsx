import { useEffect, useState } from 'react'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiCamaraDeputados from '../../services/apiCamara'
import { Link } from "react-router-dom"
import DeputadosLista from '../../components/DeputadosLista'

const PartidosDetalhes = (props) => {

  const [partido, setPartido] = useState({})
  const [deputados, setDeputados] = useState([])
  const [paginas, setPaginas] = useState([])
  const goTo = href => () => {

    apiCamaraDeputados.get(href).then(resultado => {
      setDeputados(resultado.data.dados)
      setPaginas(resultado.data.links)
    })

  }


  useEffect(() => {

    const id = props.match.params.id

    apiCamaraDeputados.get(`/partidos/${id}`).then(resultado => {

      setPartido(resultado.data.dados)
      goTo(`${resultado.data.dados.uri}/membros`)()
      console.log(resultado.data.dados)
    })


  }, [props])

  return (
    <>
      {
        partido.id &&
        <Row>
          <Col md={3}>
            <Card title={partido.nome}>
              <Card.Img variant="top"
                src={partido.urlLogo}
              />
            </Card>
          </Col>
          <Col md={5}
          >
            <h1>{partido.nome}</h1>
            <p>Numero Eleitoral: {partido.numeroEleitoral}</p>
            <p>Sigla: {partido.sigla}</p>
            <p>Líder : {partido.status.lider.nome}</p>

          </Col>
          <Col>

          </Col>
        </Row>

      }
      <Link className="btn btn-danger mt-3" to="/Partidos">Voltar</Link>
      <DeputadosLista deputados={deputados} paginas={paginas} goTo={goTo} />
    </>

  )
}

export default PartidosDetalhes