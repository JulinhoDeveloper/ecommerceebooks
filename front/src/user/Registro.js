import React, { useState } from 'react';
import Layout from '../core/Layout'
//import {API} from '../config'

const Registro = () => {

    const [values, setValues] = useState({
        name: '',
        email: '',
        password: '',
        error: '',
        success: false
    })

    const handleChange = name => event => {
        setValues({ ...values, error: false, [name]: event.target.value });
    }

    const registroForm = () => (
        <form>
            <div className="form-group">
                <label className="text-muted">Nome</label>
                <input onChange={handleChange('name') } 
                type="text" 
                className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Email</label>
                <input onChange={handleChange('email') } 
                type="email" 
                className="form-control"/>
            </div>

            <div className="form-group">
                <label className="text-muted">Senha</label>
                <input onChange={handleChange('password') } 
                type="password" 
                className="form-control"/>
            </div>
            
            <button className="btn btn-primary" >Cadastrar</button>
        </form>
    )

    return (
        <Layout title="Registro Page" 
        description="E-commerce"
        className="container col-md-8 offset-md-2"
        >
            { registroForm() }
            { JSON.stringify(values) }
    </Layout>
    )
}
  




export default Registro;