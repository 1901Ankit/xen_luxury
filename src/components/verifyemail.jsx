import React, { useEffect } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const VerifyEmail = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get('token');
    const email = searchParams.get('email');

    if (token && email) {
      const verify = async () => {
        try {
          const response = await fetch(`${import.meta.env.VITE_API_URI}/api/auth/verify-email?token=${encodeURIComponent(token)}&email=${encodeURIComponent(email)}`);
          const data = await response.json();

          if (!response.ok) {
            throw new Error(data.message || 'Verification failed.');
          }

          toast.success('Email verified successfully! Redirecting...');
          setTimeout(() => {
            navigate('/auth', { state: { activeTab: 'login' } });
          }, 2000);
        } catch (error) {
          toast.error(error.message || 'Verification failed. Redirecting...');
          setTimeout(() => {
            navigate('/auth', { state: { activeTab: 'login' } });
          }, 2000);
        }
      };

      verify();
    }
  }, [searchParams, navigate]);

  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-4">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-500"></div>
      <p className="text-lg text-center">Verifying your email...</p>
    </div>
  );
};

export default VerifyEmail;
