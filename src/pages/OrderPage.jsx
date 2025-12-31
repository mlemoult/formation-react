import Button from '../component/Button';
import { Link } from 'react-router';

const OrderPage = () => {
    return (
        <div>
            <h1>OrderPage</h1>
            <Link to="/"><Button label={"Deconnexion"} /></Link>
        </div>
    );
};

export default OrderPage;