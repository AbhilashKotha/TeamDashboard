
import { createContext, useState, useEffect, useContext } from 'react';

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  //const [isAuthenticated, setIsAuthenticated] = useState(false);
  //const [showSignInButton, setShowSignInButton] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const username = localStorage.getItem('username');
    console.log('token', token);
    if (token) {
      //setIsAuthenticated(true);
      
      setUser(username);
      console.log('username', username);
      //setShowSignInButton(false);
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
      console.log('credentials',credentials.username);
      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.username);
      setUser({ 
        user: data.username
      });
      return true;
    } else {
      console.log(credentials)
      throw new Error('Invalid credentials');
    }
  };

  const logout = () => {
    localStorage.removeItem('token');
    setUser(null);
    window.location.reload();
  };

  const handleHome = () => {
    window.location.reload(); // Reload the page for the "Home" action
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
export const useAuth = () => {
    const context = useContext(AuthContext);
  
    if (!context) {
      throw new Error('useAuth must be used within an AuthProvider');
    }
  
    return context;
  };