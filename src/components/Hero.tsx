import { Lottie } from './ui';
import { socials } from '../data';

export const Hero = () => {
	return (
		<section
			className='w-full h-screen relative bg-gradient-to-b via-transparent from-white to-blue-50 dark:from-dark-container dark:to-dark-container'
			id='inicio'
		>
			<div className='absolute top-1/2 left-1/2 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-transparent opacity-50 rounded-full blur-[45px] h-32 w-32'></div>
			<div className='px-5 flex text-black flex-col-reverse sm:flex-row justify-center md:gap-10 items-center max-w-4xl mx-auto h-full'>
				<div>
					<h1 className='text-step-4 font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent '>
						Juan Morales
					</h1>
					<p className='text-step-2 font-bold capitalize font-code text-black dark:text-white'>
						Fullstack developer
					</p>
					<p className='sm:mb-4 text-gray-500 dark:text-gray-400 text-step-0'>
						Soy un apasionado por crear soluciones digitales que cobren vida en el mundo
						virtual. Mi enfoque se centra en el desarrollo de sitios web y aplicaciones
						móviles innovadoras y funcionales.
					</p>
					<div className='flex justify-between items-center mt-4 md:mt-0'>
						<ul className='flex gap-2 items-center text-step-1'>
							{socials.map(({ href, title, Icon }) => (
								<li
									className='hover:scale-110 transition-all duration-300 ease-in-out'
									key={title}
								>
									<a title={title} href={href} target='_blank'>
										<Icon className='text-black dark:text-white' size={30} />
									</a>
								</li>
							))}
						</ul>
						<a
							href='/docs/Juan-Morales_CV.pdf'
							title='Descargar CV'
							download={true}
							target='_blank'
							className='text-step--1 font-lato flex shadow-lg px-2 py-2 items-center gap-2 rounded-md bg-black text-white hover:shadow-xl transition-all duration-300 ease-in-out dark:bg-blue-600 dark:hover:bg-blue-700'
						>
							<p>Descargar CV</p>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='w-6 h-6'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3'
								/>
							</svg>
						</a>
					</div>
				</div>
				<Lottie
					src='/lottie/hero2.json'
					autoplay
					loop
					className='w-full h-full max-w-xs sm:w-80'
				/>
			</div>
		</section>
	);
};
