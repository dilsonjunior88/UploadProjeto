import React from "react"
import { Switch, Route} from 'react-router-dom';
import Deputados from './pages/deputados/Deputados';
import DeputadosDetalhes from './pages/deputados/DeputadosDetalhes';
import Partidos from "./pages/partidos/Partidos";
import PartidosDetalhes from "./pages/partidos/PartidosDetalhes";



const Rotas = () => {
    return(
        <Switch>
            <Route exact path="/" component={Deputados} />
            <Route exact path="/partidos/" component={Partidos} />
            <Route exact path="/partidos/:id" component={PartidosDetalhes} />            
         
            <Route exact path="/deputados" component={Deputados} />
            <Route exact path="/deputados/:id" component={DeputadosDetalhes} />
        </Switch>
    )
}

export default Rotas
