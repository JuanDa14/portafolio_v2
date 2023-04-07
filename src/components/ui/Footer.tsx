export const Footer = () => {
	return (
		<footer className='px-5 md:px-3 bg-pallete-light py-8'>
			<div className='mx-auto flex flex-col-reverse gap-3 justify-center md:flex-row md:justify-between max-w-3xl'>
				<p className='text-lg text-center font-semibold'>
					© {new Date().getFullYear()} Juandevelop.com
				</p>
				<div>
					<ul className='flex gap-3 justify-center items-center text-step-1'>
						<li className='hover:scale-110 transition-all duration-300 ease-in-out'>
							<a href='https://github.com/JuanDa14' target='_blank' title='Github'>
								<i className='fa-brands fa-github'></i>
							</a>
						</li>
						<li className='hover:scale-110 transition-all duration-300 ease-in-out'>
							<a
								title='Linkedin'
								href='https://www.linkedin.com/in/juan-david-morales-paredes-617342224'
								target='_blank'
							>
								<i className='fa-brands fa-linkedin '></i>
							</a>
						</li>
						<li className='hover:scale-110 transition-all duration-300 ease-in-out'>
							<a
								title='Instagram'
								href='https://www.instagram.com/ju4n.code/'
								target='_blank'
							>
								<i className='fa-brands fa-instagram'></i>
							</a>
						</li>
						<li className='hover:scale-110 transition-all duration-300 ease-in-out'>
							<a
								title='Facebook'
								href='https://www.facebook.com/juandavid.moralesparedes'
								target='_blank'
							>
								<i className='fa-brands fa-facebook'></i>
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
};
