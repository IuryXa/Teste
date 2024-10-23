import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Banner from '../components/Banner'
import CadastroForm from '../components/CadastroForm'


function CadastroPersona(){
    return(
        <div>
            <Header/>
            <Banner/>
            <CadastroForm/>
            <Footer/>
        </div>
    )
}

export default CadastroPersona