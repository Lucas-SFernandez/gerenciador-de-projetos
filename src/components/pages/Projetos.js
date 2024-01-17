import { useLocation } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Mensagem from '../layout/Mensagem'

import styles from './Projetos.module.css'

import Container from '../layout/Container'

import LinkBotao from '../layout/LinkBotao'

import ProjetoCard from '../project/ProjetoCard'

import Loading from '../layout/Loading'

function Projetos() {

    const [projetos, setProjects] = useState([])

    const [removeLoading, setRemoveLoading] = useState(false)

    const [projectMessage, setProjectMessage] = useState('')

    const location = useLocation()

    let message = ''

    if (location.state) {
        message = location.state.message
    }

    useEffect(() => {
        fetch("http://localhost:5000/projects", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        })

            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setProjects(data)
                setRemoveLoading(true)
            })

            .catch((err) => console.log(err))
    }, [])

    function removerProjetos(id) {

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', },
        })
            .then((resp) => resp.json())
            .then(() => {
                setProjects(projetos.filter((projeto) => projeto.id !== id))
                //message
                setProjectMessage('Projeto excluído com sucesso!')
            })
            .catch((err) => console.log(err))

    }

    return (
        <div className={styles.project_container}>

            <div className={styles.title_container}>
                <h1>Projetos</h1>

                <LinkBotao to="/newprojects" text="Criar Ptojeto" />

            </div>

            {message && <Mensagem type="success" msg={message} />}

            {projectMessage && <Mensagem type="success" msg={projectMessage} />}

            <Container customClass="start">
                {projetos.length > 0 &&
                    projetos.map((projeto) => (
                        <ProjetoCard
                            id={projeto.id}
                            name={projeto.name}
                            budget={projeto.budget}
                            category={projeto.category.name}
                            key={projeto.id}
                            handleRemove={removerProjetos}
                        />
                    ))}

                {!removeLoading && <Loading />}
                {removeLoading && projetos.length === 0 && (<p>Ainda não exixtem projetos aqui</p>)}
            </Container>
        </div>
    )
}

export default Projetos