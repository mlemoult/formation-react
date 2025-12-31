import React from 'react';
import { Link } from 'react-router';
import Button from '../component/Button';

const ErrorPage = () => {
    return (
        <div>
            <h1>OrderPage</h1>
            <Link to="/"><Button label={"Retourner vers la page d'accueil"} /></Link>
        </div>
    );
};

export default ErrorPage;