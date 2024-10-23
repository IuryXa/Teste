import styled from 'styled-components'
import ImageRight from '../assets/img2.png'

const ContactContainer = styled.div`
    display:flex;
    justify-content:space-between;
    padding: 50px 20px;
    max-width:1000px;
    margin: 0 auto;
`
const FormContainer = styled.div`
    flex: 3;
    text-align: center;
`
const Form = styled.form`

`
const Input = styled.input`
    display:block;
    width:100%;
    padding: 15px;
    margin-bottom: 20px;
    border:1px solid #ccc;
    border-radius: 4px;
`
const SearchInput = styled(Input)`
    width:50%;
    margin: 0 auto 20px auto;
`
const Button = styled.button`
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius:4px;
    cursor:pointer;
    margin-top:10px;
    font-size:16px;
    transition: background-color 0.3s;
    &:hover{
        background-color: #0056b3;
    }
`
const ImageContainer = styled.div`
    flex:2;
    img{
        width:300px;
        height: 400px;
        object-fit:cover;
        border-radius:5px;
    }
`
function ContactForm(){
    return(
        <ContactContainer>
            <FormContainer>
                <Form>
                    <SearchInput type="text" placeholder="Nome"/>
                    <SearchInput type="email" placeholder="E-mail"/>
                    <SearchInput type="text" placeholder="Assunto"/>
                    <SearchInput type="text" placeholder="Telefone"/>
                    <SearchInput type="textarea" placeholder="Mensagem"/>
                    <Button type="submit">Enviar</Button>
                </Form>
            </FormContainer>
            <ImageContainer>
                <img src={ImageRight} alt="Imagem Descritiva"/>
            </ImageContainer>
        </ContactContainer>
    )
}

export default ContactForm