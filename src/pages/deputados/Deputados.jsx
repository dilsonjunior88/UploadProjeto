import { useEffect, useState } from 'react'
import React from 'react'
import apiCamaraDeputados from '../../services/apiCamara';
import DeputadosLista from '../../components/DeputadosLista';
import { Form } from 'react-bootstrap';



const Deputados = () => {

  const [deputados, setDeputados] = useState([])
  const [paginas, setPaginas] = useState([])
  const goTo = href => () => {  //paramento da goTo linha 28 - link

    apiCamaraDeputados.get(href).then(resultado => {
      setDeputados(resultado.data.dados)
      setPaginas(resultado.data.links)
    })

  }

  const filtrarDeputado = nome => {
    goTo(`/deputados?nome=${nome}&itens=10&dataInicio=2019-01-01&ordem=ASC&ordenarPor=nome`)()
  }


  useEffect(() => {
    goTo('/deputados?itens=24&dataInicio=2019-01-01')()

  }, [])
  return (
    <>

      <br></br>
      <Form.Control type="text" placeholder="Digite o Nome do Parlamentar" onChange={(event) => filtrarDeputado(event.target.value)} />
      <br></br>
      <DeputadosLista deputados={deputados} paginas={paginas} goTo={goTo} />
    </>

  )
}

export default Deputados