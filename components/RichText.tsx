import { documentToReactComponents, Options } from '@contentful/rich-text-react-renderer';
import { Document } from '@contentful/rich-text-types';

const options: Options = {
  //
};

interface Props {
  text: Document;
}

const RichText = ({ text }: Props) => <div>{documentToReactComponents(text, options)}</div>;

export default RichText;
