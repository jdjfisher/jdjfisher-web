import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import Head from 'next/head';

dayjs.extend(advancedFormat);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>jdjfisher</title>
        <meta name="description" content="My website." key="desc" />
      </Head>

      <div className="mx-auto flex min-h-screen max-w-4xl flex-col gap-8 px-8">
        <Header />

        <main className="flex flex-1">
          <Component {...pageProps} />
        </main>

        <Footer />
      </div>
    </>
  );
}
