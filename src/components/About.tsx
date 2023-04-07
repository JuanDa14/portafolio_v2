import { Fade } from 'react-awesome-reveal';
import { abilities } from '../data';
import { Lottie } from './ui';

export const About = () => {
	return (
		<Fade triggerOnce className='py-10'>
			<section className='px-5 md:px-3 max-w-3xl mx-auto text-black' id='conoceme'>
				<h2 className='text-step-1 uppercase font-bold mb-4 border-b-2 border-gray-500 py-5'>
					Sobre mí 👋
				</h2>
				<div className='flex flex-col gap-10 justify-center items-center md:flex-row md:items-center mb-10 mt-10'>
					<div>
						<Lottie src='lottie/about.json' className='w-full h-full max-w-[200px]' />
					</div>
					<div className='flex-1 text-step--1 text-gray-800'>
						<p className='mb-4'>
							Comencé mi carrera en la programación en el año 2020, cuando tomé mi primer
							curso de programación en línea. Desde entonces, he estado trabajando en
							proyectos personales y colaborando con diferentes empresas y organizaciones.
						</p>
						<p className='mb-4 text-gray-900 font-semibold'>
							Mi objetivo es crear productos que ofrezcan experiencias excepcionales, con un
							diseño atractivo, intuitivo y de alta calidad.
						</p>
						<p className=''>
							Estoy siempre dispuesto a aprender nuevas tecnologías y a afrontar nuevos
							desafíos laborales que me permitan seguir creciendo profesionalmente.
						</p>
					</div>
				</div>
				<div className='flex flex-col'>
					<h2 className='text-step-0 uppercase font-medium mb-4'>Skills:</h2>
					<ul className='flex flex-wrap text-step--1 p-2 font-code'>
						{abilities.map((ability) => (
							<li key={ability.name} className='px-1 bg-blue-500 rounded-lg text-white m-1'>
								{ability.name}
							</li>
						))}
					</ul>
				</div>
			</section>
		</Fade>
	);
};
