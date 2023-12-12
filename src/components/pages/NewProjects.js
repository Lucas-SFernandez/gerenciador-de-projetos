import { useNavigate } from 'react-router-dom'

import styles from './NewProjects.module.css'

import ProjetoForm from '../project/ProjetoForm'

function NewProjects() {

    const navigate = useNavigate()

    function creatPost(project) {

        //initialize cost an services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify(project),
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect

                navigate('/projetos', { message: 'Projeto criado com sucesso!' })
            })
            .catch(err => console.log(err))

    }


    return (
        <div className={styles.novosprojetos_container}>
            <h1>Criar Projeto</h1>

            <p>
                Crie seu projeto para depois adicionar os serviçoes
            </p>

            <ProjetoForm handleSubmit={creatPost} btnText="Criar Projeto" />


        </div>
    )
}

export default NewProjects