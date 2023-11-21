
import { createContext, useState, useEffect } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    if (token) { 
      setUser(username);
    }
  }, []);

  const login = async (credentials) => {
    const response = await fetch('http://localhost:3001/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    
    const data = await response.json();
    
    if (data.token) {
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      setUser({ 
        user: data.username
      });
      return true;
    } else {
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.reload();
  };

  const handleHome = () => {
    window.location.reload();
  };

  const isAuthenticated = () => {
    return user !== null;
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, handleHome, isAuthenticated }}>
      {children} 
    </AuthContext.Provider>
  );

};

export {AuthProvider};