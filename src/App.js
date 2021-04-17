import { Switch, Route, Link } from 'react-router-dom';

import Bank from './pages/bank';
import Login from './pages/login';
import { getLightProfile } from './services/auth';

import './App.css';
import { UserContext } from './context/User';
import { useState } from 'react';

function App() {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={[user, setUser]}>
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
