import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import './globals.css';

const display = Playfair_Display({ subsets: ['latin'], variable: '--font-display', display: 'swap' });
const inter = Inter({ subsets: ['latin'], variable: '--font-sans', display: 'swap' });

const siteUrl = 'https://pho-garden-rio-rancho.netlify.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Pho Garden | Fresh Vietnamese Soul in Rio Rancho, New Mexico',
  description: 'An ultra-premium Vietnamese restaurant experience where the Mekong meets the Rio Grande. Authentic pho, garden-fresh herbs, refined hospitality, and serene dining in Rio Rancho.',
  keywords: ['Pho Garden', 'Vietnamese restaurant Rio Rancho', 'pho New Mexico', 'Vietnamese food Albuquerque', 'fine dining Vietnamese'],
  openGraph: {
    title: 'Pho Garden — Fresh Vietnamese Soul in Rio Rancho',
    description: 'Where the Mekong meets the Rio Grande.',
    url: siteUrl,
    siteName: 'Pho Garden',
    images: [{ url: '/og.svg', width: 1200, height: 630, alt: 'Pho Garden Vietnamese restaurant in Rio Rancho' }],
    locale: 'en_US',
    type: 'website'
  },
  twitter: { card: 'summary_large_image', title: 'Pho Garden', description: 'Fresh Vietnamese Soul in Rio Rancho, New Mexico' },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${inter.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
