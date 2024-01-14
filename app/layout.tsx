import type { Metadata } from 'next';
// import { Inter } from 'next/font/google';
import './globals.css';
import Header from './Components/Header';
import ThemeRegistry from './Theme';

// const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'صفحه اصلی',
  description: 'محصولات',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <ThemeRegistry>
          <Header />
          <main className="mt-[4.52rem]">{children}</main>
        </ThemeRegistry>
      </body>
    </html>
  );
}
