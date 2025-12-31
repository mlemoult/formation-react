import Button from '../component/Button';
import { Link, useParams } from 'react-router';

const OrderPage = () => {

    const { id } = useParams()
    return (
        <div>
            <h1>Bonjour {id}</h1>
            <Link to="/"><Button label={"Deconnexion"} /></Link>
        </div>
    );
};

export default OrderPage;