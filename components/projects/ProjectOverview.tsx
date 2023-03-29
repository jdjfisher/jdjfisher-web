import { Project } from '@/types';
import RichText from '../RichText';
import { FaGithub } from 'react-icons/fa';

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2>{project.fields.title}</h2>

        {project.fields.repositoryUrl && (
          <a href={project.fields.repositoryUrl} className="peer">
            <FaGithub size={24} />
          </a>
        )}
      </div>

      {/* @ts-ignore */}
      <RichText text={project.fields.content} />
    </div>
  );
}
