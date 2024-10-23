import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import TemporadasCard from '../components/TemporadasCard'
import imagem1 from '../assets/s1.jpg'
import imagem2 from '../assets/s2.jpg'
import imagem3 from '../assets/s3.jpg'
import imagem4 from '../assets/s4.jpg'
import imagem5 from '../assets/s5.jpg'
import imagem6 from '../assets/s6.jpg'
import imagem7 from '../assets/s7.jpg'
import imagem8 from '../assets/s8.jpg'
import imagem9 from '../assets/s9.jpg'

function Temporadas() {
  const seasons = [
    { id: 1, title: '1º Temporada', description: 'A primeira temporada de The Office.', img: imagem1 },
    { id: 2, title: '2º Temporada', description: 'A segunda temporada de The Office.', img: imagem2 },
    { id: 3, title: '3º Temporada', description: 'A terceira temporada de The Office.', img: imagem3 },
    { id: 4, title: '4º Temporada', description: 'A quarta temporada de The Office.', img: imagem4 },
    { id: 5, title: '5º Temporada', description: 'A quinta temporada de The Office.', img: imagem5 },
    { id: 6, title: '6º Temporada', description: 'A sexta temporada de The Office.', img: imagem6 },
    { id: 7, title: '7º Temporada', description: 'A sétima temporada de The Office.', img: imagem7 },
    { id: 8, title: '8º Temporada', description: 'A oitava temporada de The Office.', img: imagem8 },
    { id: 9, title: '9º Temporada', description: 'A nona temporada de The Office.', img: imagem9 },
  ];

  return (
    <div>
      <Header />
      <TemporadasCard seasons={seasons} /> {/* Passando as temporadas para o componente TemporadasCard */}
      <Footer />
    </div>
  );
}

export default Temporadas;
