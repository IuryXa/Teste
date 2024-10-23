import React from 'react';
import { useNavigate } from 'react-router-dom'; // Importar o hook useNavigate
import Header from '../components/Header';
import Footer from '../components/Footer';
import Banner from '../components/Banner';
import PersonagensCard from '../components/PersonagensCard';
import image1 from '../assets/01.png';
import image2 from '../assets/02.png';
import image3 from '../assets/03.png';
import image4 from '../assets/04.png';
import image5 from '../assets/05.png';
import image6 from '../assets/06.png';
import image7 from '../assets/07.png';
import image8 from '../assets/08.png';
import image9 from '../assets/09.png';

function Personagens() {
  const navigate = useNavigate();  // Hook para navegar entre as páginas

  const characters = [
    { id: '1', src: image1, alt: 'Dwight Schrute', title: "Dwight Schrute", description: "Assistente do gerente regional, é um premiado vendedor e voluntário reserva do xerife de Lackawanna." },
    { id: '2', src: image2, alt: 'Michael Scott', title: "Michael Scott", description: "Gerente regional da filial de Scranton da Dunder Mifflin Paper Company" },
    { id: '3', src: image3, alt: 'Jim Halpert', title: "Jim Halpert", description: "Um dos vendedores da Dunder Mifflin, tem uma forte amizade marcada por uma tensão romântica, com a recepcionista Pam." },
    { id: '4', src: image4, alt: 'Pam Beesly', title: "Pam Beesly", description: "Recepcionista da Dunder Mifflin, começa a série como noiva do entregador Roy." },
    { id: '5', src: image5, alt: 'Angela Martin', title: "Angela Martin", description: "Contadora. Rígida e séria, vive sozinha e tem mania por gatos." },
    { id: '6', src: image6, alt: 'Phyllis Vance', title: "Phyllis Vance", description: "Ela é um tipo quieto, mas amigável, que adora conversa de garotas e fofoca." },
    { id: '7', src: image7, alt: 'Stanley Hudson', title: "Stanley Hudson", description: "Ele é retratado como um funcionário sério, perpetuamente mal-humorado e descontente." },
    { id: '8', src: image8, alt: 'Holly Flax', title: "Holly Flax", description: "Chega a Dunder Mifflin para servir como substituta de Toby Flenderson , o anterior representante de RH da filial de Scranton." },
    { id: '9', src: image9, alt: 'Ryan Howard', title: "Ryan Howard", description: "Estagiário e estudante de administração." },
  ]

  return (
    <div>
      <Header />
      <Banner />
      <PersonagensCard characters={characters} navigate={navigate} /> {/* Passa o hook navigate */}
      <Footer />
    </div>
  )
}

export default Personagens;
