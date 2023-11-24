import React from 'react';
import LoginForm from './login-form';
import { MainNav } from '@/components/main-nav';
import RootLayout from '@/app/layout';

export default function LoginPage() {
  return (
    <RootLayout>
      <MainNav />
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-full max-w-md px-6 py-8 bg-white shadow-md rounded">
          <h2 className="mb-6 text-3xl font-bold text-center">Login</h2>
          <LoginForm />
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">
              Don't have an account?{' '}
              <a href="#" className="text-blue-500 hover:underline">
                Create one here
              </a>
            </p>
          </div>
        </div>
      </div>
    </RootLayout>
  );
}
