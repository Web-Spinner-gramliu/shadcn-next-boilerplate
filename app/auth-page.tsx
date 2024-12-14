import React from 'react';
import { SiteHeader } from '@/components/site-header';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const AuthPage: React.FC = () => {
  // State and handlers would be defined here

  return (
    <>
      <SiteHeader />
      <main className='container py-12'>
        <div className='max-w-md mx-auto bg-card p-8 rounded-lg shadow'>
          <h1 className='text-lg font-bold mb-6'>Login</h1>
          <form className='space-y-4'>
            <Input placeholder='Username' />
            <Input type='password' placeholder='Password' />
            <Button type='submit'>Log In</Button>
          </form>
          <div className='text-center text-sm text-muted-foreground mt-4'>
            Don't have an account? <a href='/signup' className='text-primary hover:underline'>Sign up</a>
          </div>
        </div>
      </main>
    </>
  );
};

export default AuthPage;
