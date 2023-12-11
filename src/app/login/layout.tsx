import dynamic from 'next/dynamic';
import AppName from './parts/AppName';
import Footer from './parts/Footer';
import LoginBackground from './parts/LoginBackground';

const Authenticated = dynamic(() => import('../../components/Authenticated'), {
  ssr: false,
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <AppName />
      <LoginBackground />

      <div className="grid grid-rows-1 auto-rows-auto h-full">
        {children}
        <Footer />
      </div>
      <Authenticated />
    </div>
  );
}
