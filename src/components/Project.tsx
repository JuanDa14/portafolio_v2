import { projects } from '../data';
import { AiFillGithub } from 'react-icons/ai';
import { LuSend } from 'react-icons/lu';

export const Project = () => {
	return (
		<section className='bg-pallete-light dark:bg-dark-container py-10' id='proyectos'>
			<div className='px-5 md:px-3 max-w-3xl mx-auto'>
				<h2 className='text-step-1 text-black dark:text-white uppercase font-bold border-black mb-4 dark:border-gray-100'>
					Experiencia
				</h2>
				<ul className='grid grid-cols-fit-250 gap-3'>
					{projects
						.sort((a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime())
						.map((project, index) => (
							<li key={index}>
								<div className='cursor-pointer border bg-white dark:bg-dark-body dark:border-gray-600 relative flex items-center justify-between rounded-lg overflow-hidden'>
									<div className='p-4'>
										<h2 className='capitalize font-semibold text-black dark:text-white'>
											{project.title}
										</h2>
										<p className='text-gray-500 line-clamp text-sm  dark:text-gray-400'>
											{project.description}
										</p>
										<ul className='mt-3 flex flex-wrap items-center gap-2 font-code'>
											{project.technologies.map((technology) => (
												<li key={technology}>
													<img
														className='w-5'
														src={`/icons/${technology.toLocaleLowerCase()}.svg`}
														alt={technology}
													/>
												</li>
											))}
										</ul>
										<div className='flex justify-end gap-2 capitalize'>
											{project.byMe ? (
												<>
													<a href={project.githubUrl} target='_blank' title='Github'>
														<AiFillGithub
															size={20}
															className='text-black dark:text-white'
														/>
													</a>
													<a
														href={project.websiteUrl}
														target='_blank'
														title='Ver Proyecto'
													>
														<LuSend
															size={20}
															className='text-black dark:text-white'
														/>
													</a>
												</>
											) : (
												<>
													<a href={project.websiteUrl} target='_blank' title='Ver'>
														<LuSend
															size={20}
															className='text-black dark:text-white'
														/>
													</a>
												</>
											)}
										</div>
									</div>
								</div>
							</li>
						))}
				</ul>
			</div>
		</section>
	);
};
