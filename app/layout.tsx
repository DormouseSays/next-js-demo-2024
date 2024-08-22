import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard EF',
    default: 'Acme Dashboard EF',
  },
  description: 'The official Next.js Course Dashboard, built with App Router, EF24',
  metadataBase: new URL('https://next-js-demo-2024-fritzs-projects-8d8d674d.vercel.app/'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
