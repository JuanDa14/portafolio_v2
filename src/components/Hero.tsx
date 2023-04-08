import { Fade } from 'react-awesome-reveal';
import { Lottie } from './ui';

export const Hero = () => {
	return (
		<section
			className='w-full h-screen relative bg-gradient-to-b via-transparent from-white to-blue-50'
			id='inicio'
		>
			<div className='absolute top-1/2 left-1/2 sm:left-1/3 transform -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-blue-500 to-transparent opacity-50 rounded-full blur-[45px] h-32 w-32'></div>
			<div className='px-5 flex text-black flex-col-reverse sm:flex-row justify-center gap-10 items-center max-w-4xl mx-auto h-full'>
				<Fade direction='left' triggerOnce>
					<div>
						<h1 className='text-step-4 font-bold bg-gradient-to-r from-blue-500 to bg-cyan-500 bg-clip-text text-transparent'>
							Juan Morales
						</h1>
						<p className='text-step-2 font-bold capitalize font-code'>Fullstack developer</p>
						<p className='sm:mb-4 text-step-0 text-gray-500'>
							Me gusta crear cosas que vivan en internet, desde sitios web hasta aplicaciones
							móviles.
						</p>
						<div className='flex justify-between items-center mt-4 md:mt-0'>
							<ul className='flex gap-2 items-center text-step-1'>
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
									<a href='https://github.com/JuanDa14' target='_blank' title='Github'>
										<i className='fa-brands fa-github'></i>
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
							<a
								href='/docs/Juan-Morales_CV.pdf'
								title='Descargar CV'
								download={true}
								target='_blank'
								className='text-step--1 font-lato flex shadow-lg px-2 py-2 items-center gap-2 rounded-md bg-black text-white hover:shadow-xl transition-all duration-300 ease-in-out'
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
				</Fade>
				<Fade direction='right' triggerOnce>
					<div>
						<Lottie
							src='/lottie/hero.json'
							autoplay
							loop
							className='w-full h-full max-w-[15rem] sm:max-w-3xl '
						/>
					</div>
				</Fade>
			</div>
		</section>
	);
};
