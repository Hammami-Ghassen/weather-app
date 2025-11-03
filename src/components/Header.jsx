import React from 'react';
import '../styles/Header.css'; 

export default function Header() {
  const formatFrenchDate = () => {
    return new Date().toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <header className="header">
      <h1 className="header-title">My Weather App</h1>
      <h2 className="header-date">{formatFrenchDate()}</h2>
    </header>
  );
}