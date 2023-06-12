import RichText from '@/components/RichText';
import { getProject, getProjects } from '@/lib/cms/bindings';
import { FaGithub } from 'react-icons/fa';
import Link from 'next/link';
import { z } from 'zod';
import Placeholder from '@/components/Placeholder';

export const dynamicParams = false;

export interface Props {
  params: any;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((post) => ({
    title: post.fields.title,
  }));
}

export default async function Projec({ params }: Props) {
  const title = z.string().parse(params?.title);

  const project = await getProject(title);

  return (
    <div className="w-full space-y-10">
      <div className="items-center justify-between sm:flex">
        <h1>{project.fields.title}</h1>

        <div className="flex justify-items-end gap-4">
          <Link href="/projects" className="text-gray-500">
            {'<-'} back
          </Link>

          {project.fields.repositoryUrl && (
            <a href={project.fields.repositoryUrl}>
              <FaGithub size={24} />
            </a>
          )}
        </div>
      </div>

      <Placeholder />
    </div>
  );
}
