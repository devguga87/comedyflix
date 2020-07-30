import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import PageDefault from '../../../components/PageDefault'
import FormField from '../../../components/FormField'

function CadastroCategoria() {
    const valoresIniciais = {
        nome:'',
        descricao:'',
        cor:''
    }

    const [categorias, setCategorias] = useState([])
    const [values, setValues] = useState(valoresIniciais)

    function setValue(chave, valor){
        setValues({
            ...values,
            [chave]:valor  //isso vai escrever a chave de forma dinamica
        })
    }

    function handleChange(infosDoEvento){
        //const {getAttribute, value} = infosDoEvento.target
        setValue(
            infosDoEvento.target.getAttribute('name'),
            infosDoEvento.target.value
        )

    }

    return(
        <PageDefault>
            <h1>Cadastro de Categoria: {values.nome}</h1>
            <form onSubmit={function handleSubmit(infosDoEvento){
                infosDoEvento.preventDefault()
                console.log('Voce tentou enviar o form')
                setCategorias([
                    ...categorias,
                    values
                ])

                setValues(valoresIniciais)

            }}>

                <FormField 
                    label="Nome da categoria"
                    type="text"
                    name="nome"
                    value={values.nome}
                    onChange={handleChange}
                />

                <FormField 
                    label="Descricao"
                    type="textarea"
                    name="descricao"
                    value={values.descricao}
                    onChange={handleChange}
                />

                <FormField
                    label="Cor" 
                    type="color"
                    name="cor"
                    value={values.cor}
                    onChange={handleChange}
                />

                
                

                <button >
                    Cadastrar
                </button>
            </form>
            <ul>
                    {categorias.map((categoria) => {
                        return(
                          <li key={categoria.nome}>
                              {categoria.nome}
                          </li>
                        )
                        }
                    )}
            </ul>

            <Link to="/" >
                <p> Ir para home</p>
            </Link>
        </PageDefault>
    )
}

export default CadastroCategoria