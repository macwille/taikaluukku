import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { useField } from '../hooks/useField';
import loginService from '../services/login';

interface NavigationProps {
  setUser: (value: false) => void;
}

const Login: React.FC<NavigationProps> = ({ setUser }) => {
  const username = useField({ type: 'text' });
  const password = useField({ type: "password" });
  const navigate = useNavigate();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    try {
      const response = await loginService.login(username.value, password.value);
      window.localStorage.setItem('name', response.name);
      window.localStorage.setItem('token', response.token);
      setUser(response.name);
      navigate('/')
    } catch (error) {
      console.log('Error when logging in', error)
    }
  }

  return (
    <div id="login">
      <h2>Log In</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input {...username} />
        </label>
        <label>
          Password:
          <input {...password} />
        </label>
        <button type="submit" >Submit</button>
      </form>
    </div>
  )
}

export default Login