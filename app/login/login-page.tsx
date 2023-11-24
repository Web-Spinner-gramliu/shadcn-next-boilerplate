import React, { useState } from 'react';
import Link from 'next/link';
import { siteConfig } from '@/config/site';
import { buttonVariants } from '@/components/ui/button';

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login with:', username, password);
  };

  return (
    <div className='container mx-auto p-6'>
      <div className='max-w-md mx-auto bg-white p-8 rounded shadow'>
        <h1 className='text-3xl font-bold mb-6'>Login</h1>
        <form onSubmit={handleLogin}>
          <label htmlFor='username' className='block mb-2 text-sm font-medium text-gray-700'>Username</label>
          <input
            type='text'
            id='username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className='mb-4 w-full rounded border px-3 py-2'
          />
          <label htmlFor='password' className='block mb-2 text-sm font-medium text-gray-700'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='mb-4 w-full rounded border px-3 py-2'
          />
          <button
            type='submit'
            className={buttonVariants({ variant: 'solid' })}
          >
            Login
          </button>
        </form>
        <p className='mt-4 text-center'>
          Don't have an account? 
          <Link href='/signup'>
            <a className='text-blue-600 hover:underline'>Sign up</a>
          </Link>
        </p>
      </div>
    </div>
  );
}
