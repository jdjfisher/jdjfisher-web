import type { Project } from '../../types';

interface Props {
  project: Project;
}

const statusColours: Record<Project['status'], string> = {
  active: '#99b88c',
  closed: '#ddd',
  paused: '#aaa',
  prototyping: '#bbb',
} as const;

export default function ProjectStatus({ project }: Props) {
  return (
    <code
      className="select-none rounded-full px-3 py-1 text-xs shadow-inner"
      style={{ backgroundColor: statusColours[project.status] }}
    >
      {project.status}
    </code>
  );
}
