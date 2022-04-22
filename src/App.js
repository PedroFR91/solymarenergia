import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import Home from './pages/Home';
import Comercializadoras from './pages/Comercializadoras';
import Comparador from './pages/Comparador';
import Login from './pages/Login';
import { useContext } from 'react';
import { AuthContext } from './context/AuthContext';
import Contratos from './pages/Contratos';
import Comisiones from './pages/Comisiones';
import Ofertas from './pages/Ofertas';

function App() {
  const { currentUser } = useContext(AuthContext);

  const RequireAuth = ({ children }) => {
    return currentUser ? children : <Navigate to='/login' />;
  };

  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route
            path='/'
            element={
              <RequireAuth>
                <Home />
              </RequireAuth>
            }
          />
          <Route
            path='/comercializadoras'
            element={
              <RequireAuth>
                <Comercializadoras />
              </RequireAuth>
            }
          />
          <Route
            path='/comparador'
            element={
              <RequireAuth>
                <Comparador />
              </RequireAuth>
            }
          />
          <Route
            path='/contratos'
            element={
              <RequireAuth>
                <Contratos />
              </RequireAuth>
            }
          />
          <Route
            path='/comisiones'
            element={
              <RequireAuth>
                <Comisiones />
              </RequireAuth>
            }
          />
          <Route
            path='/ofertas'
            element={
              <RequireAuth>
                <Ofertas />
              </RequireAuth>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
