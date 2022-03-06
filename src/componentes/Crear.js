import { useState } from 'react';
import { Link } from 'react-router-dom';
import { url } from '../assets/Global';

const Crear = () => {

    const [libro, setLibro] = useState({
        id: null,
        titulo: '',
        autor: ''
    });

    // Para validar datos de formulario
    const [errores, setErrores] = useState([]);

    const enviarlibro = (e) => {
        e.preventDefault();  // return false en el submit
        //console.log(libro);
        
        // Si hay algún eror no se envía
        var errores = [];
        if (!libro.titulo) errores.push("error_titulo");
        if (!libro.autor) errores.push("error_autor");
        setErrores(errores);
        if (errores.length > 0) return false;

        // Si no hay errores preparamos el fetch
        const condiciones = {
            method : 'POST',
            body : JSON.stringify(libro),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        fetch(url,condiciones)
        .then(respuesta => respuesta.json())
        .then(data => {
            console.log(data);
            window.history.go(-1); // Para volver al enlace anterior
        })
        .catch();
    };

    
    // Para enlazar los inputs con el estado
    const cambiaValor = (e) => {
        //console.log(e.target.name, e.target.value)
        setLibro({
            ...libro, [e.target.name] : e.target.value
        });
    }

    // Para ver si hay errores en los campos (estén vacíos)
    const verificarError = (elemento) =>{
        return errores.indexOf(elemento) !== -1;
    }

    return (
        <div className="card">
            <div className="card-header">
                Crear libro
            </div>
            <div className="card-body">
                <form onSubmit={enviarlibro}>
                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" value={libro.titulo} onChange={cambiaValor} id="titulo" 
                        className={((verificarError('error_titulo'))?"is-invalid":"")+"form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="invalid-feedback">Escriba el título del libro</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="autor">Autor</label>
                        <input type="text" name="autor" value ={libro.autor} onChange={cambiaValor} id="autor" 
                        className={((verificarError('error_autor'))?"is-invalid":"")+"form-control"} placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="invalid-feedback">Escriba el texto del libro</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Crear</button>
                        <Link to={"/"} className="btn btn-primary">Cancelar</Link>

                    </div>
                </form>
            </div>
            <div className="card-footer texto-muted">
            </div>
        </div>
    );
}
export default Crear;