

"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { MainLayout } from '@/layouts';
import { Button } from '@/components/Button';
import { login, LoginRequest } from '@/services/loginService'; // Importa el servicio de login




const Login = () => {
  const [usuario, setUsuario] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [recaptchaToken, setRecaptchaToken] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    const request: LoginRequest = { usuario, password, recaptchaToken };
  
    try {
      const response = await login(request);
      // Manejar la respuesta del servicio de login
      console.log('Respuesta de inicio de sesión:', response);
    
      // Redireccionar a la página de perfil si el inicio de sesión fue exitoso
      //router.push(`/perfil/${usuario}`);
      console.log('se iniciooo')
    } catch (error: any) {
      if (typeof error === 'string') {
        console.error('Error al iniciar sesión:', error);
        setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      } else {
        console.error('Error al iniciar sesión:', error.message);
        setError('Error al iniciar sesión. Por favor, inténtalo de nuevo.');
      }
    }
  };
  

  return (
    <MainLayout>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-full max-w-md">
          <h2 className="text-2xl mb-4">Iniciar Sesión</h2>
          {error && <div className="text-red-500 mb-4">{error}</div>}
          <div className="mb-4">
            <label className="block mb-1">Usuario</label>
            <input
              type="text"
              value={usuario}
              onChange={(e) => setUsuario(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1">Captcha Token</label>
            <input
              type="text"
              value={recaptchaToken}
              onChange={(e) => setRecaptchaToken(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
          <Button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
            Iniciar Sesión
          </Button>
        </form>
      </div>
    </MainLayout>
  );
};

export default Login;
