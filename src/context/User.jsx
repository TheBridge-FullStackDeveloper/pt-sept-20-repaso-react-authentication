import React, { useContext, useEffect, useState } from 'react';
import { getLightProfile, postLogin } from '../services/auth';

export const UserContext = React.createContext(null);

export function useUser() {
  const [user, setUser] = useContext(UserContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getLightProfile()
      .then((id) => {
        setUser({ id });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  async function login(email, password) {
    postLogin(email, password).then((email) => {
      if (email) {
        setUser({ email });
      }
    });
  }

  return { user, loading, login };
}
