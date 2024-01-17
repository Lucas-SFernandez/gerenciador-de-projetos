import { useState, useEffect } from 'react'

import styles from './ProjetoForm.module.css'

import Input from '../form/Input'

import Select from '../form/Select'

import SubmitButton from '../form/SubmitButton'

function ProjetoForm({ handleSubmit, btnText, projectData }) {

    const [categories, setCategories] = useState([])

    const [projeto, setProject] = useState(projectData || {})

    useEffect(() => {
        fetch("http://localhost:5000/categories", {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((resp) => resp.json())
            .then((data) => {
                setCategories(data)
            })
            .catch((err) => console.log(err))
    }, [])


    const submit = (e) => {
        e.preventDefault()
        handleSubmit(projeto)
    }


    function handleChange(e) {
        setProject({ ...projeto, [e.target.name]: e.target.value })
    }


    function handleCategory(e) {
        setProject({
            ...projeto, category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
            },
        })
    }


    return (
        <form onSubmit={submit} className={styles.form}>

            <Input type="text" name="name" text="Nome do Projeto" placeholder="Insira o nome do projeto" handleOnChange={handleChange} value={projeto.name ? projeto.name : ''} />

            <Input type="number" name="budget" text="Orçamento do Projeto" placeholder="Insira o orçamento total do projeto" handleOnChange={handleChange} value={projeto.budget ? projeto.budget : ''} />

            <Select name="category_id" text="Selecione a Categoria" options={categories} handleOnChange={handleCategory} value={projeto.category ? projeto.category.id : ''} />

            <SubmitButton text={btnText} />

        </form>
    )
}

export default ProjetoForm