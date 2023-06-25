import RichText from '@/components/RichText';
import { getImageAsset, getWords } from '@/lib/cms/bindings';
import Image from 'next/image';

export default async function About() {
  const [image1, image2, words1, words2] = await Promise.all([
    getImageAsset('7opaxdbYq6u2RnNBPpu8k6'),
    getImageAsset('65BaCsRXfrJwxbteN1iYpv'),
    getWords('about-page-1'),
    getWords('about-page-2'),
  ]);

  return (
    <div className="space-y-5">
      <h1>About</h1>

      <div className="grid gap-x-12 gap-y-8 sm:grid-cols-9">
        <div className="sm:col-span-7">
          <RichText text={words1} />
        </div>

        <Image
          src={`https:${image1.url}`}
          alt="Headshot"
          width={512}
          height={512}
          className="shadow-xl sm:col-span-2"
        />

        <div className="sm:order-last sm:col-span-7">
          <RichText text={words2} />
        </div>

        <Image
          src={`https:${image2.url}`}
          alt="Me"
          width={512}
          height={512}
          className="shadow-xl sm:col-span-2"
        />
      </div>
    </div>
  );
}
