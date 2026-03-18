import { createContext, useEffect, useState } from "react";
import { api } from "../../api/api";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
  const [data, setData] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('@Shopee:token');
    const user = localStorage.getItem('@Shopee:user');

    if (token && user) {
      setData({ user: JSON.parse(user), token });
      api.defaults.headers.authorization = `Bearer ${token}`;
    }
  }, []);

  async function signin(email, password) {
    try {
      const res = await api.post('/users/signin', {
        email,
        password,
      });

      const { user, token } = res.data;
      api.defaults.headers.authorization = `Bearer ${token}`;
       
      localStorage.setItem('@Shopee:user', JSON.stringify(user));
      localStorage.setItem('@Shopee:token', token);

      setData({ user, token });
      return res.data;
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao fazer login");
    }
  }

  async function signup(name, email, password) {
    try {
      await api.post('/users/signup', {
        nome: name,
        email,
        password,
      });

      return {
        message: "Usuário criado!",
        success: true,
      };
    } catch (error) {
      throw new Error(error.response?.data?.message || "Erro ao cadastrar");
    }
  }

  async function loggout() {
   localStorage.removeItem('@Shopee:token');
   localStorage.removeItem('@Shopee:user');
   api.defaults.headers.authorization = "";
	 setData({});
  }

  return (
    <AuthContext.Provider value={{ signin, signup, data, loggout }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthProvider };