import React, { useState } from 'react';
import { Button } from '@/components/ui/button';

export default function LoginPage() {
  const [formData, setFormData] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle Login Logic Here
    console.log('Form Data', formData);
  };

  return (
    <div className='flex items-center justify-center min-h-screen bg-background'>
      <div className='p-10 bg-card shadow-md rounded-md'>
        <h1 className='text-xl font-bold mb-6'>Login</h1>
        <form onSubmit={handleSubmit} className='space-y-6'>
          <input
            type='text'
            name='username'
            placeholder='Username'
            value={formData.username}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            required
          />
          <input
            type='password'
            name='password'
            placeholder='Password'
            value={formData.password}
            onChange={handleChange}
            className='w-full px-4 py-2 border border-input rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent'
            required
          />
          <Button type='submit' className='w-full'>Login</Button>
        </form>
        <div className='mt-4 text-center'>
          <button
            onClick={() => alert('Redirect to account creation')}
            className='text-primary hover:underline'
          >
            Create a new account
          </button>
        </div>
      </div>
    </div>
  );
}