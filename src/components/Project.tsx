import { Fade } from 'react-awesome-reveal';
import { projects } from '../data';

export const Project = () => {
	return (
		<section className='bg-pallete-light dark:bg-dark-container' id='proyectos'>
			<div className='px-5 py-10 md:px-3 max-w-3xl mx-auto'>
				<h2 className='text-step-1 text-black dark:text-white uppercase font-bold mb-4 border-b-2 border-black py-5 dark:border-gray-100'>
					Experiencia ☕
				</h2>
				<ul className='grid grid-cols-fit-250 gap-3 mt-10'>
					<Fade triggerOnce cascade damping={0.1}>
						{projects
							.sort(
								(a, b) => new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
							)
							.map((project, index) => (
								<li key={index}>
									<div className='cursor-pointer border bg-white dark:bg-dark-body dark:border-gray-600 relative flex items-center justify-between rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 ease-in-out'>
										{project.byMe && (
											<div className='text-step--2 font-semibold absolute top-0 right-0 bg-pallete-gray dark:bg-gray-700 text-white dark:text-white px-2 py-1 rounded-bl-lg'>
												<span className='flex items-center gap-1 justify-center'>
													<span>Personal</span>
												</span>
											</div>
										)}
										<div className=' flex-1 p-4'>
											<h2 className='text-step-0 capitalize font-bold mb-2 text-black dark:text-white'>
												{project.title}
											</h2>
											<p className='text-gray-500 line-clamp text-step--1 dark:text-gray-400'>
												{project.description}
											</p>
											<ul className='flex flex-wrap text-sm p-2 font-code'>
												{project.technologies.map((technology) => (
													<li
														className={`${
															index === 0
																? ' text-white bg-black dark:bg-gray-600'
																: 'bg-blue-500 text-white'
														} px-1 capitalize rounded-md m-1`}
														key={technology}
													>
														{technology}
													</li>
												))}
											</ul>
											<div className='flex justify-end gap-2 text-step--1 capitalize'>
												{project.byMe ? (
													<>
														<a
															href={project.githubUrl}
															target='_blank'
															title='Github'
														>
															<i className='fa-brands fa-github text-black dark:text-white'></i>
														</a>
														<a
															href={project.websiteUrl}
															target='_blank'
															title='Ver Proyecto'
														>
															<i className='fa-solid fa-code text-black dark:text-white'></i>
														</a>
													</>
												) : (
													<>
														<a href={project.websiteUrl} target='_blank' title='Ver'>
															<i className='fa-solid fa-share text-black dark:text-white'></i>
														</a>
													</>
												)}
											</div>
										</div>
									</div>
								</li>
							))}
					</Fade>
				</ul>
			</div>
		</section>
	);
};
