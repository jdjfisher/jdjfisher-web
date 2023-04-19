import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document, BLOCKS } from '@contentful/rich-text-types';
import Image from 'next/image';

const options: Options = {
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const file = node.data.target.fields.file;

      return (
        <Image
          src={`https://${file.url}`}
          height={file.details.image.height}
          width={file.details.image.width}
          alt={node.data.target.fields.description}
        />
      );
    },
  },
};

interface Props {
  text: Document;
}

const RichText = ({ text }: Props) => (
  <div className="space-y-4">{documentToReactComponents(text, options)}</div>
);

export default RichText;
