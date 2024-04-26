import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import { Header } from './components/Header/Header';
import { Footer } from './components/Footer/Footer';
import '../app/styles/app.scss';

const poppins = Poppins({
  subsets: ['latin-ext'],
  weight: '600',
});

export const metadata: Metadata = {
  title: 'Start Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${poppins.className} body`}>
        <Header />
        <main className='main'>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
