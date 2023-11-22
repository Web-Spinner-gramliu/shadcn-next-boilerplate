import React from 'react';

const CreateAccountLink: React.FC = () => (
  <div className='text-center mt-6'>
    <span className='text-gray-700'>Don't have an account?</span>
    {' '}
    <a href='/create-account' className='font-bold text-blue-500 hover:text-blue-700'>Sign up</a>
  </div>
);

export default CreateAccountLink;
