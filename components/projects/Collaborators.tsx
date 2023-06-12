import type { Collaborator } from '@/types';
import Image from 'next/image';

export interface Props {
  collaborators: Collaborator[];
}

export default function Collaborators({ collaborators }: Props) {
  return (
    <div className="flex justify-end gap-2">
      <span className="font-bold">w/</span>

      {collaborators.map((collaborator) => (
        <a href={collaborator.referenceUrl} key={collaborator.handle}>
          <div className="group flex items-center gap-2">
            <Image
              className="rounded-full"
              src={collaborator.imageUrl}
              alt={collaborator.handle}
              width={24}
              height={24}
            />
            <span className="decoration-orange-500 decoration-2 underline-offset-2 group-hover:underline">
              {collaborator.handle}
            </span>
          </div>
        </a>
      ))}
    </div>
  );
}
