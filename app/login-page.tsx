import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', username, password);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-50'>
      <div className='max-w-md w-full space-y-8 p-10 bg-white shadow rounded-lg'>
        <div className='flex justify-center'>
          {/* Logo component or image here */}
        </div>
        <form className='mt-8 space-y-6' onSubmit={handleLogin}>
          <div>
            <label htmlFor='username' className='sr-only'>Username</label>
            <input
              id='username'
              name='username'
              type='text'
              autoComplete='username'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Username'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor='password' className='sr-only'>Password</label>
            <input
              id='password'
              name='password'
              type='password'
              autoComplete='current-password'
              required
              className='appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <Button type='submit' variant='default' className='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
              Sign in
            </Button>
          </div>
        </form>
        <div className='mt-6 text-center'>
          <Link href='/create-account'>
            <a className='font-medium text-indigo-600 hover:text-indigo-500'>
              Create a new account
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
