import React from 'react';
import '../styles/App.css';

const Home = () => {
  return (
    <section className="home-section">
      <div className="hero">
        <h1>VivaRaiz</h1>
        <p>Explora, publica y conecta con todo el mundo inmobiliario en un solo lugar.</p>
        <a href="/explore" className="btn-primary">Explorar Propiedades</a>
      </div>
    </section>
  );
};

export default Home;
