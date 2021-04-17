import { useContext } from 'react';
import { Redirect } from 'react-router';

import { UserContext } from '../context/User';

export default function Bank() {
  // Aquí pediremos el usuario del custom hook
  const { user, loading } = useContext(UserContext);

  if (loading) {
    return <h2>Loading data...</h2>;
  }

  return !user ? (
    <Redirect to="/login" />
  ) : (
    <div>
      <h2>Cuenta bancaria 💸</h2>

      <p>Estos son tus datos super secretos!</p>
    </div>
  );
}
