import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { url } from '../assets/Global';

const Listar = () => {
    const [libros, setLibros] = useState([]);
    const [estaCargado, setEstaCargado] = useState(false);

    const cargarDatos = () => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setLibros(data);
                setEstaCargado(true);
            })
            .catch(error => {
                console.log(error);
            });
    }

    const borrar = (id) =>{
        fetch(url+"/"+id, { method : 'DELETE'})
            .then((response) => response.json())
            .then((data) => {
                cargarDatos();
            })
            .catch(error => {
                console.log(error);
            });
    }

    useEffect(() => {
        cargarDatos();
    }, []);

    if (!estaCargado) {
        return <div>Cargando ...</div>
    } else {
        return (
            <div className="card">
                <div className="card-header">
                <Link className="btn btn-success" to={"/crear"}>Agregar libro</Link>
                </div>
                <div className="card-body">
                    <h4>Listado de libros</h4>
                    <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                libros.map((libro) =>
                                    <tr key={libro.id}>
                                        <td>{libro.id}</td>
                                        <td>{libro.titulo}</td>
                                        <td>{libro.autor}</td>
                                        <td>
                                            <div className="btn-group" role="group" aria-label="">
                                                <Link className="btn btn-warning" to={"/editar/"+libro.id}
                                                      >Editar</Link>
                                                <button type="button" onClick={()=>borrar(libro.id)} className="btn btn-danger">Borrar</button>
                                            </div>
                                        </td>
                                    </tr>
                                )

                            }
                        </tbody>
                    </table>
                </div>
                <div className="card-footer text-muted">
                    {/* Footer */}
                </div>
            </div>

        );
    }
}
export default Listar;