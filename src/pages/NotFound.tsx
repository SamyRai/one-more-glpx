import React from 'react';
import { useNavigate } from 'react-router-dom';
import Container from '@/components/ui/Container';

function NotFound() {
  const navigate = useNavigate();

  return (
    <Container>
      <div className="py-20 text-center">
        <div className="text-2xl font-semibold">Page not found</div>
        <button onClick={() => navigate("/")} className="mt-6 underline">Back to home</button>
      </div>
    </Container>
  );
}

export default NotFound;