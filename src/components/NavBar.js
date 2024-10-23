import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarContainer = styled.nav`
    display:flex;
    justify-content:space-around;
    align-items:center;
    padding: 1em 0;
`

const Menu = styled(Link)`
    color: #fff;
    justify-content: space-around;
    margin: 0 1em;
    text-decoration:none;
    cursor: pointer;
    &:hover{
        text-decoration: underline;
    }
`

function NavBar (){
    return(
        <NavBarContainer>
            <Menu to="/">Home</Menu>
            <Menu to="/personagens">Personagens</Menu>
            <Menu to="/temporadas">Temporadas</Menu>
            <Menu to="/contato">Contato</Menu>
            {/* <Menu to="/cadastro">Cadastro</Menu> */}
            <Menu to="/Login">Login</Menu>
        </NavBarContainer>
    )
}

export default NavBar