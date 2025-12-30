import React, { useState } from 'react';

const LoginForm = () => {
    const [prenom, setPrenom] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        alert("bonjour " + prenom)
        setPrenom('')
    }

    return (
        <>
            <h1>Bienvenue chez nous !</h1>

            <h2>Connectez-vous</h2>
            <form onSubmit={handleSubmit} action="submit">
                <input type='text' placeholder='Entrez votre prénom...' required onChange={(e) => setPrenom(e.target.value)} />
                <Button label='Entrez votre prénom...' />
            </form></>
    );
};

export default LoginForm;