import RichText from '@/components/RichText';
import { getImageAsset, getWords } from '@/lib/cms/bindings';
import Image from 'next/image';

export default async function About() {
  const [avatar, text] = await Promise.all([
    getImageAsset('7opaxdbYq6u2RnNBPpu8k6'),
    getWords('about-page'),
  ]);

  return (
    <div className="space-y-5">
      <h1>About</h1>

      <div className="float-right hidden pl-8 pb-8 sm:block">
        <Image
          src={`https:${avatar.url}`}
          alt="Me"
          width={200}
          height={200}
          className="shadow-xl"
        />
      </div>

      <RichText text={text} />
    </div>
  );
}
