import { socials } from '../../data';

export const Footer = () => {
	return (
		<footer className='px-5 md:px-3 border dark:border-none dark:bg-dark-body py-8'>
			<div className='mx-auto flex flex-col-reverse gap-3 justify-center md:flex-row md:justify-between max-w-3xl'>
				<div className='flex gap-1 text-center'>
					<p className='dark:text-white'>
						© {new Date().getFullYear()} Juandevelop.com | FullStack Developer
					</p>
				</div>
				<div>
					<ul className='flex gap-2 justify-center items-center'>
						{socials.map(({ href, title, Icon }) => (
							<li
								className='hover:scale-110 transition-all duration-300 ease-in-out'
								key={title}
							>
								<a title={title} href={href} target='_blank'>
									<Icon className='text-black dark:text-white' size={25} />
								</a>
							</li>
						))}
					</ul>
				</div>
			</div>
		</footer>
	);
};
