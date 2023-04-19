import RichText from '@/components/RichText';
import { getImageAsset, getWords } from '@/lib/cms/bindings';
import { ImageFile } from '@/types';
import { Document } from '@contentful/rich-text-types';
import { GetStaticProps } from 'next';
import Image from 'next/image';

interface Props {
  avatar: ImageFile;
  text: Document;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const [avatar, text] = await Promise.all([
    getImageAsset('7opaxdbYq6u2RnNBPpu8k6'),
    getWords('about-page'),
  ]);

  return {
    props: { avatar, text },
  };
};

export default function About({ avatar, text }: Props) {
  return (
    <div className="space-y-5">
      <h1>About</h1>

      <div className="float-right pl-8 pb-8">
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
