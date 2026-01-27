'use client';

import { usePathname } from 'next/navigation';
import SignUpDrawer from '@/components/SignUpDrawer';

const SignUpDrawerGate = () => {
  const pathname = usePathname();

  if (pathname === '/privacy_policy') {
    return null;
  }

  return <SignUpDrawer />;
};

export default SignUpDrawerGate;
