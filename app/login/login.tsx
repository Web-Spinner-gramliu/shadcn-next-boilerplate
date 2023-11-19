import React from 'react';
import LoginForm from '@/components/LoginForm';

const LoginPage = () => {
  return (
    <div className='flex min-h-screen bg-background text-foreground flex-col items-center justify-center'>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
