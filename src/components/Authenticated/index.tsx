'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { useAuth } from 'hooks/useAuth';

export default function Authenticated() {
  const { isAuthenticated } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (isAuthenticated) {
      router.push('/');
    }
  }, [isAuthenticated, router]);

  return <></>;
}
