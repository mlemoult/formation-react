import React, { useState } from 'react';
import Button from '../component/Button';

const LoginPage = () => {

    const [prenom, setPrenom] = useState('')

    const handleSubmit = () => {
        alert(prenom)
        setPrenom('')
    }

    return (
        <>
            <h1>Bienvenue chez nous !</h1>

            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Entrez votre prénom...' required onChange={(e) => setPrenom(e.target.value)} />
                <Button label='Entrez votre prénom...' />
            </form>
        </>
    );
};

export default LoginPage;