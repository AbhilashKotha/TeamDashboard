import { createContext } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext();

function Auth({ children }) {
    const navigate = useNavigate();

    const handleSignIn = async (email, password) => {
        try {
            const response = await axios({
                method: 'post',
               //Put your sigin api in the url
                url: 'http://localhost:3001/auth/SignIn',
                data: {
                    email: `${email}`,
                    password: `${password}`
                }
            })
            sessionStorage.setItem('token', response.data.token)
            navigate("/MemberDetail");
        } catch (e) {
            console.log(e)
        }

    }

    const handleLogout = () => {
        sessionStorage.clear()
        navigate("/SignIn")
    }

    return (
        <AuthContext.Provider value={{ handleSignIn, handleLogout }}>
            {children}
        </AuthContext.Provider>
    )

}

export default Auth;