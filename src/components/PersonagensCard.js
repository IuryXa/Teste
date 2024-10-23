import styled from 'styled-components';

const Container = styled.div`
  max-width: 1000px;
  margin: auto;
  padding: 10px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  gap: 20px;
`;

const MainTitle = styled.h1`
  text-align: center;
  margin: 40px 0;
`;

const ImageCard = styled.div`
  width: calc(33.333% - 20px);
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 30px;
`;

const StyledImage = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 5px solid #007BFF;
  object-fit: cover;
  margin-bottom: 10px;
`;

const SubTitle = styled.h2`
  color: #007BFF;
  text-align: center;
  margin: 0 0 5px 0;
`;

const Description = styled.p`
  text-align: center;
  margin-bottom: 10px;
  flex: 1;
`;

const Button = styled.button`
  width: 50%;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  margin-top: auto;
  &:hover {
    background-color: #394c73;
  }
`;

function PersonagensCard({ characters, navigate }) {  // Recebe o hook navigate como prop
  return (
    <div>
      <MainTitle>Personagens</MainTitle>
      <Container>
        {characters.map((character) => (
          <ImageCard key={character.id}>
            <StyledImage src={character.src} alt={character.alt} />
            <SubTitle>{character.title}</SubTitle>
            <Description>{character.description}</Description>
            {/* Adiciona a navegação ao clicar no botão */}
            <Button onClick={() => navigate(`/bio/${character.id}`)}>Saiba mais</Button>
          </ImageCard>
        ))}
      </Container>
    </div>
  );
}

export default PersonagensCard;
