import React, { useState } from 'react';
import '../style/auth/LoginPage.css';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [form, setForm] = useState({
    username: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', form);
  };

  return (
    <div className="login-page">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Connexion</h2>
        <div className="form-group">
          <label htmlFor="username">Pseudo</label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Mot de passe</label>
          <input
            type="password"
            id="password"
            name="password"
            value={form.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Se connecter</button>
        <Link className='link-register' to="/register">
          <a>Pas encore inscrit ? Par ici !</a>
        </Link>
      </form>
    </div>
  );
};

export default LoginPage;
