import { Project } from '@/types';
import RichText from '../RichText';
import ProjectStatus from './ProjectStatus';
import RowLink from '../layout/RowLink';

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <RowLink href={`/projects/${project.title}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2>{project.title}</h2>

          <ProjectStatus project={project} />
        </div>

        {/* @ts-ignore */}
        <RichText text={project.content} />
      </div>
    </RowLink>
  );
}
