import { Project } from '@/types';
import RichText from '../RichText';
import { FaGithub } from 'react-icons/fa';
import ProjectStatus from './ProjectStatus';
import Row from '../layout/Row';

interface Props {
  project: Project;
}

export default function ProjectOverview({ project }: Props) {
  return (
    <Row>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2>{project.fields.title}</h2>

          <div className="flex gap-4">
            {project.fields.repositoryUrl && (
              <a href={project.fields.repositoryUrl} className="peer">
                <FaGithub size={24} />
              </a>
            )}

            <ProjectStatus project={project} />
          </div>
        </div>

        {/* @ts-ignore */}
        <RichText text={project.fields.content} />
      </div>
    </Row>
  );
}
