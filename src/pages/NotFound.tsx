import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/Button';

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-8">Page not found</p>
      <Link to="/" className="inline-flex">
        <Button variant="primary">Return home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
