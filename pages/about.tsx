import { getImageAsset } from '@/lib/cms/bindings';
import { ImageFile } from '@/types';
import { GetStaticProps } from 'next';
import Image from 'next/image';

interface Props {
  avatar: ImageFile;
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const avatar = await getImageAsset('7opaxdbYq6u2RnNBPpu8k6');

  return {
    props: { avatar },
  };
};

export default function About({ avatar }: Props) {
  return (
    <div className="space-y-5">
      <h1>About</h1>

      <div className="flex justify-between gap-8">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, dolores, magnam fuga
          possimus molestias eligendi praesentium exercitationem magni architecto quae, et facere.
          Obcaecati sapiente iusto ducimus. Eligendi assumenda repudiandae error quis qui, delectus
          eius incidunt fugiat minima odio dicta repellendus? Dignissimos quia eos quidem fugiat
          nostrum deserunt nemo, blanditiis facere delectus provident explicabo? Perspiciatis beatae
          maiores officia corrupti possimus quas autem reiciendis, nostrum optio illo consequuntur
          inventore alias aspernatur delectus nisi ad dolore in voluptas assumenda.
        </p>

        <Image
          src={`https:${avatar.url}`}
          alt="Me"
          width={avatar.details.image.width}
          height={avatar.details.image.height}
        />
      </div>

      <p>
        Facilis asperiores nostrum porro ex odio consequatur aliquid officia veniam voluptatibus
        perferendis, numquam dolorem cumque. Ut quis nam repellat hic! Nesciunt voluptatem expedita,
        eum, adipisci odio iure molestias iusto minima impedit, blanditiis debitis vero sint
        perspiciatis optio laudantium. Nesciunt consequuntur ullam quos fuga minus neque laudantium,
        aliquam facere qui saepe rem accusantium officiis distinctio possimus quod minima adipisci
        expedita. Modi quisquam rem quod temporibus hic, reprehenderit labore neque aliquam
        cupiditate, nihil eius error in sit velit molestias? Iure id sed accusamus laborum in neque
        nostrum aspernatur blanditiis pariatur nemo quo omnis, explicabo exercitationem dolore
        reprehenderit quidem ipsam enim cum asperiores placeat sunt eum similique modi eveniet.
        Sequi possimus assumenda libero placeat inventore labore, quis aperiam ex! Impedit
        praesentium temporibus quidem quas hic ex repudiandae consectetur sit velit similique ullam
        maiores, deleniti, officia molestiae quibusdam error. Consequuntur maxime eveniet itaque
        quos quaerat, quidem laboriosam similique cumque suscipit harum! Quis, consequuntur officia!
      </p>

      <p>
        Debitis nesciunt minus unde ipsum incidunt numquam eum odio voluptas vel voluptatibus iusto
        repudiandae consequuntur, dignissimos accusantium hic, dolorem facere nulla excepturi
        doloremque? Vitae velit magnam quis architecto excepturi amet delectus in consequuntur,
        deserunt dolorum quidem suscipit mollitia quas hic earum eius? Quibusdam iure illo accusamus
        aut. Adipisci, excepturi ad quod pariatur odio veniam reprehenderit impedit exercitationem
        aut harum possimus at eaque rem, reiciendis ipsam velit dolores voluptate deleniti libero
        ullam perspiciatis facere eveniet.
      </p>
    </div>
  );
}
