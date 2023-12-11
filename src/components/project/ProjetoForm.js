import styles from './ProjetoForm.module.css'

import Input from '../form/Input'

import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

function ProjetoForm({btnText}) {
    return (
        <form className={styles.form}>

            <Input type="text" name="name" text="Nome do Projeto" placeholder="Insira o nome do projeto" />

            <Input type="number" name="budget" text="Orçamento do Projeto" placeholder="Insira o orçamento total do projeto" />

            <Select name="category_id" text="Selecione a Categoria" />

            <SubmitButton text={btnText}/>

        </form>
    )
}

export default ProjetoForm