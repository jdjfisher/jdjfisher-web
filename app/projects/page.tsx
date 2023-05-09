import ProjectOverview from '@/components/projects/ProjectOverview';
import { getProjects } from '@/lib/cms/bindings';

export default async function Projects() {
  const projects = await getProjects();

  return (
    <div className="space-y-5">
      <h1>Projects</h1>

      <p>I&apos;ll finish one someday</p>

      <div className="space-y-8">
        {projects.map((project) => (
          <ProjectOverview project={project} key={project.fields.title} />
        ))}
      </div>
    </div>
  );
}
