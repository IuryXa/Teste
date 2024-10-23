import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styled from 'styled-components';
import imagem1 from '../assets/s1.jpg'
import imagem2 from '../assets/s2.jpg'
import imagem3 from '../assets/s3.jpg'
import imagem4 from '../assets/s4.jpg'
import imagem5 from '../assets/s5.jpg'
import imagem6 from '../assets/s6.jpg'
import imagem7 from '../assets/s7.jpg'
import imagem8 from '../assets/s8.jpg'
import imagem9 from '../assets/s9.jpg'

const Container = styled.div`
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  text-align: center;
`

const Image = styled.img`
  width: 100%;
  max-height: 400px;
  object-fit: cover;
`

const Title = styled.h1`
  margin-top: 20px;
`

const Description = styled.p`
  margin-top: 10px;
  font-size: 1.2rem;
`
const Button = styled.button`
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  align-self: flex-start;
  &:hover {
    background-color: #394c73;
  }
`

function Temporada() {
  const { id } = useParams(); // Pegando o ID da temporada da URL
  const navigate = useNavigate();

  const seasonData = {
    1: { title: '1º Temporada', description: 'Descrição da primeira temporada de The Office', img: imagem1 },
    2: { title: '2º Temporada', description: 'Descrição da segunda temporada de The Office', img: imagem2 },
    3: { title: '3º Temporada', description: 'Descrição da terceira temporada de The Office', img: imagem3 },
    4: { title: '4º Temporada', description: 'Descrição da quarta temporada de The Office', img: imagem4 },
    5: { title: '5º Temporada', description: 'Descrição da quinta temporada de The Office', img: imagem5 },
    6: { title: '6º Temporada', description: 'Descrição da sexta temporada de The Office', img: imagem6 },
    7: { title: '7º Temporada', description: 'Descrição da sétima temporada de The Office', img: imagem7 },
    8: { title: '8º Temporada', description: 'Descrição da oitava temporada de The Office', img: imagem8 },
    9: { title: '9º Temporada', description: 'Descrição da nona temporada de The Office', img: imagem9 },
  };

  const temporada = seasonData[id]

  const handleBack = () => {
    navigate(-1);
  }

  return (
    <>
      <Header />
      <Container>
        <Image src={temporada.img} alt={temporada.title} />
        <Title>{temporada.title}</Title>
        <Description>{temporada.description}</Description>
        <Button onClick={handleBack}>Voltar</Button>
      </Container>
      <Footer />
    </>
  );
}

export default Temporada
