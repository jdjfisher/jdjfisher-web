import { Project } from '@/types';

interface Props {
  project: Project;
}

const statusColours: Record<Project['fields']['status'], string> = {
  closed: '#ddd',
  paused: '#aaa',
  prototyping: '#bbb',
} as const;

export default function ProjectStatus({ project }: Props) {
  return (
    <code
      className="select-none rounded-full px-3 py-1 text-xs shadow-inner"
      style={{ backgroundColor: statusColours[project.fields.status] }}
    >
      {project.fields.status}
    </code>
  );
}
