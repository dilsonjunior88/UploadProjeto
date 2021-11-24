import { useEffect, useState } from 'react'
import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import apiCamaraDeputados from '../../services/apiCamara'
import { Link } from "react-router-dom"
import Nav from 'react-bootstrap/Nav'
import DespesasLista from '../../components/DespesasLista'
import { dataBr } from '../../util/formatter'




const getId = url => url.match(/\d+$/)[0] /*pesquisa um valor dentro de uma string e retorna um array com valor*/

const DeputadosDetalhes = (props) => {

  const [deputado, setDeputado] = useState({})
  const [despesas, setDespesas] = useState([])

  const buscarDespesa = deputadoId => {

    apiCamaraDeputados.get(`/deputados/${deputadoId}/despesas?ordem=ASC&ordenarPor=ano`).then(resultado => {

      setDespesas(resultado.data.dados)
    })
    
  } 

  

  useEffect(() => {

    const id = props.match.params.id

    apiCamaraDeputados.get(`/deputados/${id}`).then(resultado => {

      setDeputado(resultado.data.dados)
      buscarDespesa(resultado.data.dados.id)
    })


  }, [props])

  return (
    <>
      {
        deputado.id &&
        <Row>
          <Col md={3}>
            <Card title={deputado.nomeCivil.nome}>
              <Card.Img variant="top"
                src={deputado.ultimoStatus.urlFoto}
              />
            </Card>
          </Col>
          <Col md={9}
          >

            <h1>{deputado.nomeCivil}</h1>
            <p>{deputado.ultimoStatus.nome}</p>
            <p>Partido: <Nav.Link href={`/partidos/${getId(deputado.ultimoStatus.uriPartido)}`}> {deputado.ultimoStatus.siglaPartido}</Nav.Link> </p>
            <p>Eleito pelo Estado: {deputado.ultimoStatus.siglaUf}</p>
            <p>Tel Gabinete: {deputado.ultimoStatus.gabinete.telefone}</p>
            <p>Email: {deputado.ultimoStatus.email}</p>
            <p>Escolaridade: {deputado.escolaridade}</p>
            <p>Data Nasc: {dataBr(deputado.dataNascimento)}</p>
            <p>CPF: {deputado.cpf}</p>
            <p>Redes Sociais:
              {deputado.redeSocial.map(item => <><a href={item}>{item}</a><br /></>)}
            </p>
          </Col>
        </Row>

      }
      <Link className="btn btn-danger mt-3" to="/deputados">Voltar</Link>
      <br></br>
      <br></br>

      <DespesasLista despesas={despesas}/>



    </>

  )
}

export default DeputadosDetalhes



