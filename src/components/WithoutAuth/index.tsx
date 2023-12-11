'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ToastContainer, toast } from 'react-toastify';

import { useAuth } from 'hooks/useAuth';

export default function WithoutAuthentication() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!isAuthenticated) {
      toast.error('Sesión expirada, por favor inicia sesión nuevamente');
      router.push('/login');
    }
  }, [isAuthenticated, router]);

  return <ToastContainer position="bottom-right" />;
}
