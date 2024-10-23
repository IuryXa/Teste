import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import ImageText from '../components/ImageText'
import imagem1 from '../assets/s1.jpg'
import imagem2 from '../assets/s2.jpg'
import imagem3 from '../assets/s3.jpg'
import imagem4 from '../assets/s4.jpg'
import imagem5 from '../assets/s5.jpg'
import imagem6 from '../assets/s6.jpg'
import imagem7 from '../assets/s7.jpg'
import imagem8 from '../assets/s8.jpg'
import imagem9 from '../assets/s9.jpg'

function Home() {
  const allSeasons = [
    { id: 1, src: imagem1, alt: '1º Temporada', text: '1º Temporada' },
    { id: 2, src: imagem2, alt: '2º Temporada', text: '2º Temporada' },
    { id: 3, src: imagem3, alt: '3º Temporada', text: '3º Temporada' },
    { id: 4, src: imagem4, alt: '4º Temporada', text: '4º Temporada' },
    { id: 5, src: imagem5, alt: '5º Temporada', text: '5º Temporada' },
    { id: 6, src: imagem6, alt: '6º Temporada', text: '6º Temporada' },
    { id: 7, src: imagem7, alt: '7º Temporada', text: '7º Temporada' },
    { id: 8, src: imagem8, alt: '8º Temporada', text: '8º Temporada' },
    { id: 9, src: imagem9, alt: '9º Temporada', text: '9º Temporada' },
  ];

  // Estado para armazenar as temporadas em destaque (3 temporadas por vez)
  const [highlightedSeasons, setHighlightedSeasons] = useState(allSeasons.slice(0, 3));

  useEffect(() => {
    const rotateSeasons = () => {
      setHighlightedSeasons((prevSeasons) => {
        const currentIndex = allSeasons.findIndex((s) => s.id === prevSeasons[0].id);
        const nextIndex = (currentIndex + 3) % allSeasons.length;  // Pula para o próximo conjunto de 3 temporadas
        return allSeasons.slice(nextIndex, nextIndex + 3);
      });
    };

    const interval = setInterval(rotateSeasons, 3000); // Rotaciona a cada 5 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [allSeasons]);

  return (
    <div>
      <Header />
      <Banner />
      <ImageText images={highlightedSeasons} /> {/* Mostra 3 temporadas em destaque */}
      <Footer />
    </div>
  );
}

export default Home;
