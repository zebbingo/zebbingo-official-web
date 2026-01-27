'use client';

import { usePathname } from 'next/navigation';
import SubscribeDrawer from '@/components/SubscribeDrawer';

const SubscribeDrawerGate = () => {
  const pathname = usePathname();

  if (pathname === '/privacy_policy') {
    return null;
  }

  return <SubscribeDrawer />;
};

export default SubscribeDrawerGate;
