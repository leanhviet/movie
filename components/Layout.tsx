import React from 'react';
import { MetaProps } from '../types/layout';
import Head from './Head';
import Navigation from './Navigation';
import Link from 'next/link';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  customMeta?: MetaProps;
};

export const WEBSITE_HOST_URL = 'https://nextjs-typescript-mdx-blog.vercel.app';

const Layout = ({ children, customMeta }: LayoutProps): JSX.Element => {
  return (
    <>
      <Head customMeta={customMeta} />
      <header>
        <div>
          <div className="flex items-center justify-between pb-6">
            <Navigation />
          </div>
        </div>
      </header>
      <main>
        <div className="max-w-6xl py-4 mx-auto">{children}</div>
      </main>
     <Footer />
    </>
  );
};

export default Layout;
