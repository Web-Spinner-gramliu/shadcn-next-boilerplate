import React, { useState } from 'react';
import { MainNav } from '@/components/main-nav';
import { siteConfig } from '@/config/site';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', username, password);
  };

  const handleCreateAccount = () => {
    // Redirect to create account page or handle account creation logic here
    console.log('Redirect to create account page');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <MainNav items={siteConfig.navItems} />
      <div className="w-full max-w-md p-8 bg-white shadow-md rounded">
        <h1 className="text-xl font-bold text-center mb-6">Login to your account</h1>
        <form onSubmit={handleLogin} className="flex flex-col space-y-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Login
          </button>
          <button
            type="button"
            onClick={handleCreateAccount}
            className="px-4 py-2 text-blue-500 hover:underline focus:outline-none"
          >
            Create account
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
