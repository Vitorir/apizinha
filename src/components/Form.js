import React, { useState } from 'react'
import './Form.css'

function Form() {
    const [usuario, setUsuario] = useState('')
    const [senha, setSenha] = useState('')

    function handleCadastro(e) {
        e.preventDefault()

        if (!usuario || !senha) {
            console.log("Preencha os campos!");
        } else {
            localStorage.setItem('usuario', usuario)
            localStorage.setItem('senha', senha)
        }
    }

  return (
    <>
        <div className='form-card'>
            {/* <div className='col1'>
                <h1>Estados React</h1>
                <p>Esse é um formulario em React</p>
            </div> */}

            <div className='col2'>
                <form onSubmit={handleCadastro}>
                    <label htmlFor='usuario'>Usuário: </label>
                    <input
                    type='text'
                    id='usuario'
                    name='senha'
                    onChange={(e) => setUsuario(e.target.value)}
                    /> <br/> <br/>

                    <label htmlFor='usuario'>Senha: </label> 
                    <input
                    type='password'
                    id='senha'
                    name='senha'
                    onChange={(e) => setSenha(e.target.value)}
                    /> <br/> <br/>

                    <input type='submit' value="Entrar"></input>
                </form>
            </div>
        </div>
    </>
  )
}

export default Form