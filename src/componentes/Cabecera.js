import logo from '../assets/logo.svg';
import { tituloAPP } from '../assets/Global';

const Cabecera = () => {
    return (
        <>
        <img src={logo} alt="Logo" width="100px"/>
        <h1>{tituloAPP}</h1>
    </>
    );
}
export default Cabecera;