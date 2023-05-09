import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { ReactNode } from 'react';

dayjs.extend(advancedFormat);

export const metadata = {
  title: 'jdjfisher',
  description: 'My website.',
};

interface Props {
  children: ReactNode;
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="en">
      <body className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-8">
        <Header />

        <main className="flex flex-1">{children}</main>

        <Footer />
      </body>
    </html>
  );
}
