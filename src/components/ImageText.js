import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 80px;
  margin-top: 20px;
  padding-bottom: 20px;
`;

const ImageContainer = styled.div`
  width: 200px;
  height: 300px;
  margin: 0 10px;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px;
    object-fit: cover;
  }
`;

const Text = styled.p`
  text-align: center;
  margin: 10px 0;
`;

const Button = styled.button`
  display: block;
  margin: 0 auto;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #394c73;
  }
`;

function ImageText({ images }) {
  const navigate = useNavigate();  // Usando o hook de navegação

  return (
    <Container>
      {images.map((image, index) => (
        <ImageContainer key={index}>
          <img src={image.src} alt={image.alt} />
          <Text>{image.text}</Text>
          <Button onClick={() => navigate(`/temporada/${image.id}`)}>Saiba Mais</Button>  {/* Navegação para a página da temporada */}
        </ImageContainer>
      ))}
    </Container>
  );
}

export default ImageText;
