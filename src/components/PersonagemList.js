 import React from 'react'
import styled from 'styled-components'

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 1000px;
    margin: 0 auto;
`
const PersonagemCard = styled.div`
    display: flex;
    align-items: center;
    width: 80%;
    padding: 20px;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    background-color: #f9f9f9;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const PersonagemImage = styled.img`
    width:100px;
    height:100px;
    object-fit:cover;
    border-radius: 8px;
    margin-right:20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`
const PersonagemInfo = styled.div`
    flex: 1;
`
const PersonagemNome = styled.h3`
    margin: 0;
    margin-bottom: 10px;
    font-size: 1.2em;
    color: #333;
`
const PersonagemDescricao = styled.p`
    margin: 0;
    margin-bottom: 10px;
    color: #666;
    text-align:justify;
`
const Actions = styled.div`
    display: flex;
    gap: 10px;
`
const ActionButton = styled.button`
    padding: 5px 10px;
    font-size: 14px;
    color: #fff;
    background-color: #007bff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
        background-color: #0056b3;
    }
    &:first-child{
        background-color: #dc3545;
        &:hover{
            background-color: #c82333;
        }
    }
`

const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 20px;
`

function PersonagemList({personagens}){
    return(
        <ListContainer>
            <Title>Personagens Cadastrados</Title>
            {personagens.map((personagem, index) =>(
                <PersonagemCard key={index}>
                    <PersonagemImage src={personagem.src} alt={personagem.alt} />
                    <PersonagemInfo>
                        <PersonagemNome>{personagem.nome}</PersonagemNome>
                        <PersonagemDescricao>{personagem.texto}</PersonagemDescricao>
                        <Actions>
                            <ActionButton>Deletar</ActionButton>
                            <ActionButton>Editar</ActionButton>
                        </Actions>
                    </PersonagemInfo>
                </PersonagemCard>
            ))}
        </ListContainer>
    )
}

export default PersonagemList