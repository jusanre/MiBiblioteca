import React, { useState, useEffect} from 'react';
import { useParams, Link } from 'react-router-dom';
import { url } from '../assets/Global';

const Editar = () => {
    // Para recibir el id por parámetro y enviarlo a la URL
    const { id } = useParams();

    const [ urlId ] = useState(url + "/" + id); 

    const [libro, setLibro] =  useState({
        id : id,
        titulo : '',
        autor : ''
    });
    
    // Para que se ejecute cuando se cargue el componente
    useEffect(() => {
        fetch(urlId)
        .then((response) => response.json())
        .then((data) => {
              setLibro(data);
        })
        .catch(error => {
            console.log(error);
        });
    },[]);

    const modificarlibro = (e) => {
        e.preventDefault();  // return false evita el submit

        // Preparamos el fetch
        const condiciones = {
            method : 'PUT',
            body : JSON.stringify(libro),
            headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
            }
        }
        fetch(urlId,condiciones)
        .then(respuesta => respuesta.json())
        .then(data => {
             window.history.go(-1); // Para volver al enlace anterior
        })
        .catch(error => console.log(error));
    };

    // Para enlazar los inputs con el estado
    const cambiaValor = (e) => {
         //console.log(e.target.name, e.target.value)
         setLibro({
             ...libro, [e.target.name] : e.target.value
         });
     }

    return (
        <div className="card">
            <div className="card-header">
                Editar libro
            </div>

            <div className="card-body">
            <form onSubmit={modificarlibro}>
                    <div className="form-group">
                        <label>ID</label>
                        <input type="text" name="id" value={id} id="id" className="form-control" placeholder="" aria-describedby="helpId" readOnly/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="titulo">Título</label>
                        <input type="text" name="titulo" value={libro.titulo} onChange={cambiaValor} id="titulo" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Escriba el título del libro</small>
                    </div>

                    <div className="form-group">
                        <label htmlFor="text">Autor</label>
                        <input type="text" name="autor" value ={libro.autor} onChange={cambiaValor} id="autor" className="form-control" placeholder="" aria-describedby="helpId" />
                        <small id="helpId" className="text-muted">Escriba el autor del libro</small>
                    </div>

                    <div className="btn-group" role="group" aria-label="">
                        <button type="submit" className="btn btn-success">Modificar</button>
                        <Link to={"/"} className="btn btn-primary">Cancelar</Link>
                    </div>
                </form>
            </div> 
            <div className="card-footer text-muted">
            </div>
        </div>
    );
}

export default Editar;