import styles from './NewProjects.module.css'

import ProjetoForm from '../project/ProjetoForm'

function NewProjects(){
    return (
    <div className={styles.novosprojetos_container}>
        <h1>Criar Projeto</h1>

        <p>
            Crie seu projeto para depois adicionar os serviçoes
        </p>

        <ProjetoForm btnText="Criar Projeto"/>


    </div>
    )
}

export default NewProjects