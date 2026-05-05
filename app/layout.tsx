import type { Metadata } from 'next';
import { Cormorant_Garamond, Montserrat } from 'next/font/google';
import './globals.css';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-serif',
  weight: ['300', '400', '500', '600', '700'],
});

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Royal Fragrance Hub | Luxury Perfume Shop',
  description: 'Discover your signature scent at Royal Fragrance Hub. Premium perfumes for men and women with international brands and curated collections.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${cormorant.variable} ${montserrat.variable}`}>
      <body suppressHydrationWarning className="font-sans bg-black text-white selection:bg-amber-500 selection:text-black">
        {children}
      </body>
    </html>
  );
}
