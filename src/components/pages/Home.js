import styles from './Home.module.css'

import mony from "../../img/mony.png"

import LinkBotao from '../layout/LinkBotao'

function Home(){
    return (
    <section className={styles.home_container}>
        <h1>Seja bem-vendo ao <span>Mony</span></h1>

        <h2>Seu Gerenciador de Projetos</h2>

        <p>Comece a gerenciar seus projetos agora mesmo!</p>


        <LinkBotao to= "/newprojects" text="Criar Ptojeto"/>

        <img src={mony} className={styles.imagem}/>

    </section>
    )
}

export default Home