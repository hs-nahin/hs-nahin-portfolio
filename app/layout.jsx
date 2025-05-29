import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Hasnat Shahriyar - Frontend Developer',
  description: 'Frontend Developer focused on clean design and responsive UI',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="cursor" className="custom-cursor hidden md:block" />
        {children}
      </body>
    </html>
  );
}