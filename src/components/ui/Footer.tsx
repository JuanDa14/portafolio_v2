import { socials } from '../../data';

export const Footer = () => {
	return (
		<footer className='px-5 md:px-3 bg-pallete-light dark:bg-dark-body py-8'>
			<div className='mx-auto flex flex-col-reverse gap-3 justify-center md:flex-row md:justify-between max-w-3xl'>
				<p className='text-lg text-center font-semibold text-black dark:text-white'>
					© {new Date().getFullYear()} Juandevelop.com
				</p>
				<div>
					<ul className='flex gap-3 justify-center items-center text-step-1'>
						{socials.map(({ href, icon, title }) => (
							<li className='hover:scale-110 transition-all duration-300 ease-in-out'>
								<a title={title} href={href} target='_blank'>
									<i className={`fa-brands fa-${icon} text-black dark:text-white`}></i>
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
