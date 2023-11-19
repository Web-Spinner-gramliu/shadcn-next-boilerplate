import React from 'react';
import { Button } from './ui/button';
import { Icons } from './icons';

const LoginForm = () => {
  return (
    <div className='w-full max-w-md p-8 bg-card rounded-lg shadow-md'>
      <h1 className='text-xl font-bold mb-6'>Log in to Your Account</h1>
      <form className='space-y-4'>
        <div>
          <label htmlFor='email' className='block text-sm font-medium mb-2'>Email Address</label>
          <input id='email' name='email' type='email' required className='w-full px-3 py-2 border border-input rounded-md shadow-sm' />
        </div>
        <div>
          <label htmlFor='password' className='block text-sm font-medium mb-2'>Password</label>
          <input id='password' name='password' type='password' required className='w-full px-3 py-2 border border-input rounded-md shadow-sm' />
        </div>
        <Button type='submit' className='w-full'>Log In</Button>
      </form>
      <div className='flex items-center justify-between mt-6'>
        <Button variant='ghost'>Create Account</Button>
        <Button variant='link'>Forgot Password?</Button>
      </div>
    </div>
  );
};

export default LoginForm;
