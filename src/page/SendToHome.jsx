import  { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SendToHome() {
  const navigate = useNavigate();

  useEffect(() => {
    // Redirect to /ar when the component is mounted
    navigate('/ar');
  }, [navigate]);

  return (
    <div>Redirecting to the Arabic version...</div>
  );
}
