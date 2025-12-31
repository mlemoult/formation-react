import Button from '../component/Button';
import { Link, useParams } from 'react-router';

const OrderPage = () => {

    const { username } = useParams()
    return (
        <div>
            <h1>Bonjour {username}</h1>
            <Link to="/"><Button label={"Deconnexion"} /></Link>
        </div>
    );
};

export default OrderPage;