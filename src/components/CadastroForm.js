import React, { useState } from 'react'
import styled from 'styled-components'
import ImgRight from '../assets/img2.png'
import ImgPersonagem from '../assets/01.png'
import PersonagemList from './PersonagemList'


const PageContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 50px 20px;
    max-width: 1000px;
    margin: auto;
`
const FormContainer = styled.div`
    flex: 3;
    text-align: left;
    max-width: 1000px;
    margin: auto;
    margin-bottom:50px;
`
const Title = styled.h1`
    margin-top: 0;
    margin-bottom: 20px;
    text-align: left;
`
const ImageContainer = styled.div`
    flex: 2;
`
const Img = styled.img`
        width: 300px;
        height: 400px;
        object-fit: cover;
        border-radius: 5px;
`

const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom:20px;
`
const Input = styled.input`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
const TextArea = styled.textarea`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
`
const FileInput = styled.input`
    display: block;
    width:80%;
    padding: 15px;
    margin-bottom:10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    outline: none;
    &:focus{
        border-color: #007bff;
    }
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color:#fff;
    border: none;
    border-radius: 5px;
    margin-top:10px;
    font-size:16px;
    cursor: pointer;
    transition: background-color 0.3s;
    &:hover{
        background-color: #0056b3;
    }
`
const CharacterCount = styled.div`
    font-size: 12px;
    color: #555;
    align-self: flex-start;
    margin-left: 10%;
    margin-bottom:10px;
`
function CadastroPage(){
    const MAX_DESC_LENGTH = 500
    const [description, setDescription] = useState('');
   
    const Handle_Description_Change = (e) =>{
        const texto = e.target.value
        if (texto.length <= MAX_DESC_LENGTH){
            setDescription(texto)
        }
    }
    return(
        <div>
           <PageContainer>
                <FormContainer>
                    <Title>Cadastro de Personagens</Title>
                    <Form>
                        <Input
                            type="text"
                            placeholder="Nome do Personagem"
                        />
                        <TextArea
                            value={description}
                            onChange={Handle_Description_Change}
                            placeholder="Descrição do Personagem"
                        />
                        <CharacterCount>{MAX_DESC_LENGTH - description.length} caracteres restantes</CharacterCount>
                        <FileInput
                            type="file"
                        />
                        <Button type="submit">Cadastrar</Button>
                    </Form>
                </FormContainer>
                <ImageContainer>
                    <Img src={ImgRight}/>
                </ImageContainer>
           </PageContainer>
           <hr />
           <PersonagemList
                    personagens={[
                        {
                            src: ImgPersonagem,
                            alt: "Descrição da Minha Imagem",
                            nome: "Dwight Schrute",
                            texto: "Quando a série começa...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin faucibus scelerisque. Curabitur sit amet rhoncus augue, nec egestas nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacinia quam, sit amet maximus tortor. Nulla quis velit vel felis tempor tincidunt blandit et augue. Sed scelerisque sed risus ac placerat. Donec efficitur sem et lacinia finibus. Nam lobortis felis velit, quis efficitur metus euismod cursus. Nulla non ipsum eu sapien pretium laoreet.",

                        },

                        {
                            src: ImgPersonagem,
                            alt: "Descrição da Minha Imagem",
                            nome: "Dwight Schrute",
                            texto: "Quando a série começa...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin faucibus scelerisque. Curabitur sit amet rhoncus augue, nec egestas nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacinia quam, sit amet maximus tortor. Nulla quis velit vel felis tempor tincidunt blandit et augue. Sed scelerisque sed risus ac placerat. Donec efficitur sem et lacinia finibus. Nam lobortis felis velit, quis efficitur metus euismod cursus. Nulla non ipsum eu sapien pretium laoreet.",

                        },

                        {
                            src: ImgPersonagem,
                            alt: "Descrição da Minha Imagem",
                            nome: "Dwight Schrute",
                            texto: "Quando a série começa...Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sollicitudin faucibus scelerisque. Curabitur sit amet rhoncus augue, nec egestas nisl. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec lacinia quam, sit amet maximus tortor. Nulla quis velit vel felis tempor tincidunt blandit et augue. Sed scelerisque sed risus ac placerat. Donec efficitur sem et lacinia finibus. Nam lobortis felis velit, quis efficitur metus euismod cursus. Nulla non ipsum eu sapien pretium laoreet.",

                        }
                    ]}
           />
        </div>
    )
}

export default CadastroPage