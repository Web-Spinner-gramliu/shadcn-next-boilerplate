import React, { useState } from 'react';
import { SiteHeader } from '../site-header';
import { MainNav } from '../main-nav';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement login logic
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className='min-h-screen flex flex-col'>
      <SiteHeader />
      <MainNav />
      <div className='flex-grow flex items-center justify-center'>
        <div className='w-full max-w-xs'>
          <form onSubmit={handleLogin} className='bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4'>
            <div className='mb-4'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='username'>
                Username
              </label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline' id='username' type='text' placeholder='Username' value={username} onChange={handleUsernameChange} />
            </div>
            <div className='mb-6'>
              <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='password'>
                Password
              </label>
              <input className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline' id='password' type='password' placeholder='******************' value={password} onChange={handlePasswordChange} />
            </div>
            <div className='flex items-center justify-between'>
              <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline' type='submit'>
                Sign In
              </button>
              <a className='inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800' href='#'>
                Forgot Password?
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
