import { Switch, Route, Link } from 'react-router-dom';

import Bank from './pages/bank';
import Login from './pages/login';
import { UserContext, useUser } from './context/User';
import { getLightProfile } from './services/auth';

import './App.css';

function App() {
  // Usamos useUser una vez al lanzar la App
  const userContextData = useUser();

  return (
    <UserContext.Provider value={userContextData}>
      <div className="App">
        <header>
          <h1>Ejemplo de autenticación</h1>

          <nav>
            <Link to="/">Go home</Link>
            <br />
            <Link to="/login">Login</Link>
            <br />
            <Link to="/bank">Cuenta bancaria</Link>
          </nav>

          <button onClick={getLightProfile}>Check logged</button>
        </header>

        <Switch>
          <Route exact path="/login">
            <Login />
          </Route>

          <Route exact path="/bank">
            <Bank />
          </Route>

          <Route exact path="/">
            <h2>Home 🏡</h2>
          </Route>
        </Switch>
      </div>
    </UserContext.Provider>
  );
}

export default App;
