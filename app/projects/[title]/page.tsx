import RichText from '@/components/RichText';
import { getProject, getProjects } from '@/lib/cms/bindings';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { z } from 'zod';
import Placeholder from '@/components/Placeholder';
import Collaborators from '@/components/projects/Collaborators';

export const dynamicParams = false;

export interface Props {
  params: any;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((post) => ({
    title: post.title,
  }));
}

export default async function Projec({ params }: Props) {
  const title = z.string().parse(params?.title);

  const project = await getProject(title);

  return (
    <div className="w-full space-y-10">
      <div className="items-center justify-between sm:flex">
        <h1>{project.title}</h1>

        <div className="flex justify-items-end gap-4">
          <Link href="/projects" className="text-gray-500">
            {'<-'} back
          </Link>

          {project.repositoryUrl && (
            <a href={project.repositoryUrl}>
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>

      {project.collaborators && <Collaborators collaborators={project.collaborators} />}

      <Placeholder />
    </div>
  );
}
