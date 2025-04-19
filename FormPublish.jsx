import React, { useState } from 'react';
import '../styles/App.css';

const FormPublish = () => {
  const [form, setForm] = useState({
    tipo: 'Propiedad',
    titulo: '',
    descripcion: '',
    ubicacion: '',
    contacto: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Gracias! Tu ${form.tipo.toLowerCase()} ha sido publicada (modo demo).`);
    setForm({
      tipo: 'Propiedad',
      titulo: '',
      descripcion: '',
      ubicacion: '',
      contacto: '',
    });
  };

  return (
    <form className="form-publish" onSubmit={handleSubmit}>
      <label>¿Qué deseas publicar?</label>
      <select name="tipo" value={form.tipo} onChange={handleChange}>
        <option value="Propiedad">Propiedad</option>
        <option value="Servicio">Servicio</option>
        <option value="Proyecto">Proyecto</option>
      </select>

      <input
        type="text"
        name="titulo"
        placeholder="Título"
        value={form.titulo}
        onChange={handleChange}
        required
      />

      <textarea
        name="descripcion"
        placeholder="Descripción detallada"
        value={form.descripcion}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="ubicacion"
        placeholder="Ubicación"
        value={form.ubicacion}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="contacto"
        placeholder="Datos de contacto"
        value={form.contacto}
        onChange={handleChange}
        required
      />

      <button type="submit" className="btn-primary">Publicar</button>
    </form>
  );
};

export default FormPublish;
