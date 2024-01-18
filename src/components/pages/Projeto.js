import style from './Projeto.module.css'

import { useParams } from 'react-router-dom'

import { useState, useEffect } from 'react'

import Loading from '../layout/Loading'

import Container from '../layout/Container'

import ProjetoForm from '../project/ProjetoForm'

import Mensagem from '../layout/Mensagem'

function Projeto() {

    const { id } = useParams()

    const [projeto, setProjeto] = useState([])

    const [showProjetoForm, setShowProjetoForm] = useState(false)

    const [showServiceForm, setShowServiceForm] = useState(false)
    

    const[mensagem, setMensagem] = useState()

    const[type, setType] = useState()


    useEffect(() => {

        setTimeout(() => {

            fetch(`http://localhost:5000/projects/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })

                .then((resp) => resp.json())
                .then((data) => {
                    setProjeto(data)
                })

                .catch((err) => console.log(err))
        },)

    }, [id])


    function editPost(projeto){

        setMensagem('')

        //budget validação
        if(projeto.budget < projeto.cost) {
            //mensagem
            setMensagem('O orçamento não pode ser menor que o custo do projeto!')

            setType('error')
            
            return false
        }

        fetch(`http://localhost:5000/projects/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type':'application/json',
            },
            body: JSON.stringify(projeto),
        })

        .then((resp) => resp.json())
        .then((data) => {
            setProjeto(data)

            setShowProjetoForm(false)

            //mensagem
            setMensagem('Projeto atualizado!')

            setType('success')
            
        })
        .catch((err) => console.log(err))


    }

    function toggleProjetoForm() {

        setShowProjetoForm(!showProjetoForm)
    }

    function toggleServiceForm() {

        setShowServiceForm(!showServiceForm)
    }

    return (


        <>
            {projeto.name ? (

                <div className={style.projeto_detalhes}>
                    <Container customClass="colum">

                        {mensagem && <Mensagem type={type} msg={mensagem} />}


                        <div className={style.detalhes_container}>
                            <h1>Projeto: {projeto.name}</h1>

                            <button className={style.btn} onClick={toggleProjetoForm}>{!showProjetoForm ? 'Editar projeto' : 'Fechar'} {projeto.name}</button>

                            {!showProjetoForm ? (

                                <div className={style.projeto_info}>
                                    <p>
                                        <span>Categoria:</span> {projeto.category.name}
                                    </p>

                                    <p>
                                        <span>Orçamento total:</span> R${projeto.budget}
                                    </p>

                                    <p>
                                        <span>Total Utilizado:</span> R${projeto.cost}
                                    </p>
                                </div>

                            ) : (

                                <div className={style.projeto_info}>
                                    <ProjetoForm 
                                    handleSubmit={editPost} 
                                    btnText="Concluir edição" 
                                    projetoData={projeto}
                                    />
                                </div>

                            )}
                        </div>

                        <div className={style.servico_form_container}>

                                <h2>Adicione um serviço</h2>

                                <button className={style.btn} onClick={toggleServiceForm}>{!showServiceForm ? 'Adicionar Serviço' : 'Fechar'}  {projeto.name}</button>

                                <div className={style.projeto_info}>

                                {showServiceForm && (
                                <div>
                                    Formulário do serviço 
                                    </div>
                                )
                                }
                                
                                </div>

                        </div>

                        <h2>Serviços</h2>

                        <Container customClass="start">
                                <p>Intens do serviço</p>
                        </Container>

                    </Container>
                </div>

            ) : (

                <Loading />

            )}
        </>
    )
}

export default Projeto