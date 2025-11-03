import React from "react";
import "../styles/Auth.css";

export default function Authentifier() {
  return (
    <div id="container">
      <form id="auth-form" method="POST">
        <h2 id="title">Authentification</h2>

        <label htmlFor="username">Nom d'utilisateur:</label>
        <input type="text" id="username" name="username" required />

        <label htmlFor="password">Mot de passe:</label>
        <input type="password" id="password" name="password" required />

        <button type="submit" id="auth-btn">Se connecter</button>
      </form>
    </div>
  );
}