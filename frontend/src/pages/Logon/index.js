import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import { Container } from './styles';

import heroesImg from '../../assets/heroes.png';
import logo from '../../assets/logo.svg';

export default function Logon() {
  return (
    <Container>
      <section>
        <img src={logo} alt="Be The Hero"/>

        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button className="customButton" type="submit">Entrar</button>

          <Link className="back-link" to="/register">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>
        </form>
      </section>

      <img src={heroesImg} alt="Heroes"/>
    </Container>
  );
}