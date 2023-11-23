import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (event: React.FormEvent) => {
    event.preventDefault();
    // Implement login logic here
    console.log('Login with:', username, password);
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className='flex items-center justify-center h-screen bg-background'>
      <div className='p-8 bg-card shadow-md rounded'>
        <form onSubmit={handleLogin} className='flex flex-col space-y-4'>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={handleUsernameChange}
            className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={handlePasswordChange}
            className='px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-primary'
          />
          <Button type='submit'>Login</Button>
          <a
            href='/create-account'
            className='text-center text-sm text-primary hover:underline'
          >
            Create account
          </a>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
