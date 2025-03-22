'use client';

import { usePathname } from 'next/navigation';
import Header from './Header';
import ScrollProgressBar from '../animations/ScrollProgressBar';
import SectionIndicator from '../navigation/SectionIndicator';
import MiniNav from '../navigation/MiniNav';

export default function LayoutContent({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  
  const specialPages = ['/privacy', '/terms', '/shipping', '/faq', '/download'];
  const isSpecialPage = specialPages.includes(pathname);
  
  return (
    <>
      {!isSpecialPage && (
        <>
          <ScrollProgressBar />
          <SectionIndicator />
          <MiniNav />
          <Header />
        </>
      )}
      <main>{children}</main>
    </>
  );
} 