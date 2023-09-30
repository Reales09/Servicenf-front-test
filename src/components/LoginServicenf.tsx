import React, { useState } from 'react';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Construye el objeto JSON
    const userObject = { nombre_usuario: username, password: password };

    try {
      // Simula una solicitud POST exitosa (reemplaza con tu lógica real)
      // Para simular un error, cambia response.ok a false
      const response = await fetch('https://starfish-app-g8a8v.ondigitalocean.app/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userObject),
      });

      if (response.ok) {
        // Maneja la respuesta exitosa, por ejemplo, muestra una alerta de éxito
        setSuccessMessage('Inicio de sesión exitoso');
        setErrorMessage(null); // Limpia el mensaje de error si había uno
      } else {
        // Maneja errores aquí, muestra una alerta de error
        setErrorMessage('Error en el inicio de sesión');
        setSuccessMessage(null); // Limpia el mensaje de éxito si había uno
      }
    } catch (error) {
      console.error('Error en la solicitud:', error);
      // Muestra una alerta de error en caso de excepción
      setErrorMessage('Error en la solicitud');
      setSuccessMessage(null); // Limpia el mensaje de éxito si había uno
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-md w-full p-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Iniciar Sesión</h2>
        {successMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-2 rounded mb-4">
            {successMessage}
          </div>
        )}
        {errorMessage && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mb-4">
            {errorMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Nombre de usuario:</label>
            <input
              type="text"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              value={username}
              onChange={handleUsernameChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-600 font-semibold">Contraseña:</label>
            <input
              type="password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:border-blue-400"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
          >
            Iniciar Sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
