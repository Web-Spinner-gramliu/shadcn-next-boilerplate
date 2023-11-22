import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // TODO: Implement login logic here
    console.log('Login with:', username, password);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-background">
      <div className="p-8 bg-card shadow-md rounded-md">
        <form onSubmit={handleLogin} className="space-y-6">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={handleUsernameChange}
            className="w-full px-4 py-2 text-sm border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full px-4 py-2 text-sm border-2 border-border rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
          />
          <Button type="submit">
            Login
          </Button>
          <a
            href="/create-account"
            className="block text-center text-sm text-primary hover:underline"
          >
            Create account
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
