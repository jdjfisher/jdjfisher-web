import { Project } from '@/types';
import RichText from '../RichText';
import ProjectStatus from './ProjectStatus';
import RowLink from '../layout/RowLink';

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <RowLink href={`/projects/${project.fields.title}`}>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2>{project.fields.title}</h2>

          <ProjectStatus project={project} />
        </div>

        {/* @ts-ignore */}
        <RichText text={project.fields.content} />
      </div>
    </RowLink>
  );
}
