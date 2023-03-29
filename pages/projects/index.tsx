import ProjectOverview from '@/components/projects/ProjectOverview';
import { getProjects } from '@/lib/cms/bindings';
import { Project } from '@/types';
import { GetStaticProps } from 'next';

interface Props {
  projects: Project[];
}

export const getStaticProps: GetStaticProps<Props> = async (context) => {
  const projects = await getProjects();

  return {
    props: { projects },
  };
};

export default function Projects({ projects }: Props) {
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
