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

      <div className="grid sm:grid-cols-9 gap-y-8 gap-x-12">
        <div className="col-span-7">
          <RichText text={words1} />
        </div>

        <Image
          src={`https:${image1.url}`}
          alt="Headshot"
          width={200}
          height={200}
          className="col-span-2 shadow-xl"
        />

        <div className="col-span-7 sm:order-last">
          <RichText text={words2} />
        </div>

        <Image
          src={`https:${image2.url}`}
          alt="Me"
          width={200}
          height={200}
          className="col-span-2 shadow-xl"
        />
      </div>
    </div>
  );
}
