import { Routes, Route, BrowserRouter as Router, Link} from 'react-router-dom';

import Listar from './componentes/Listar';
import Crear from './componentes/Crear';
import Editar from './componentes/Editar';
import Cabecera from './componentes/Cabecera';

function App() {
  return (
    <Router>
      <Cabecera />
      <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="nav navbar-nav">
                <Link className="nav-item nav-link active" to={"/"}>Libros</Link>
                <Link className="nav-item nav-link" to={"/crear"}>Crear Libro</Link>
            </div>
        </nav>
        <br></br>
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Listar />}></Route>
          <Route path="/crear" element={<Crear />}></Route>
          <Route path="/editar/:id" element={<Editar />}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
