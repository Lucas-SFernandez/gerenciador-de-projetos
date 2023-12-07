import styles from './Home.module.css'

import savings from '../../img/savings.svg'

function Home(){
    return (
    <section>
        <h1>Seja bem-vendo ao <span>Costs</span></h1>

        <p>Comece a gerenciar seus projetos agora mesmo!</p>

        <a href="/">Criar Ptojeto</a>

        <img scr={savings} alt="Costs" />
    </section>
    )
}

export default Home