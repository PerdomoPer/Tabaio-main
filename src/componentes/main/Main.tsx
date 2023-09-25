import { useState } from 'react'
import Projeto from './../projeto/Projeto'
import './Main.css'
type ProjetoType = {
    id:number,
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Main() {

    const [texto,setTexto]=useState("")

    const projetos:ProjetoType[] = [
        {
            id:1,
            titulo:'Olimpíada de Matemática',
            sinopse:"Menção honrosa em 2017 e Medalha de Bronze em 2018",
            imagem:'/obmp.jpg'
        },
        {
            id:2,
            titulo:'Experiencia Profissional',
            sinopse:'Experiente em assistência de escritorio',
            imagem:'/logo.png'
        },
        {
            id:3,
            titulo:'Cursos Profinalizantes',
            sinopse:'Cursos de Comunicação Eficaz para Vendas e Introdução à Lógica feitos pelo Cursos Livres IFMS',
            imagem:'/cursos.png'
        },
        {
            id:4,
            titulo:'Sonhos',
            sinopse:'Sonho em me formar em engenharia mecanica em uma faculdade federal',
            imagem:'/eu.jpg'
        },
    ]
    function TrataTexto(e:React.ChangeEvent<HTMLInputElement>){
        setTexto(e.target.value)
    }
    return(
        <>
        <div className='Apresentação'>
            <img src='/ap.jpg' alt="" />
            <h1>Olá! Eu sou o Gustavo Perdomo um aluno formado no curso técnico em informática pelo ifms campus Naviraí, fui medalhista na olimpíada brasileira de matemática, com experiencia em comercio de produtos escolares, brinquedos e moveis. </h1>
        </div>
        <div className='pes'>
            <input className='pesquisa' 
            type="text" 
            placeholder='O que você está procurando?'
            onChange={TrataTexto} />
            {texto && <p className='pesquisa1'>Resultados Para: {texto} </p>}
                
        </div>
        <main className="content-main">
        {
                    projetos.filter((projeto)=>projeto.titulo.toLowerCase().includes(texto)).map(
                        (projeto)=>
                            <Projeto
                                key={projeto.id}
                                sinopse={projeto.sinopse}
                                titulo={projeto.titulo}
                                imagem={projeto.imagem}
                            />
                    )
                }
        </main>
        </>
    )
}
