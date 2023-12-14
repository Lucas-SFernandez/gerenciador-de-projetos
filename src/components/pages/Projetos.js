import { useLocation } from 'react-router-dom'

import Mensagem from '../layout/Mensagem'

function Projetos(){

    const location = useLocation()

    let mensagem = ''

    if(location.state){
        mensagem = location.state.message
    }



    return(
    <div>
        <h1>Projetos</h1>

        {mensagem && <Mensagem type="success" msg={mensagem} />}
    </div>
    )
}

export default Projetos