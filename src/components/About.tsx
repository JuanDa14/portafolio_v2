import { abilities } from '../data';
import { Lottie } from './ui';

export const About = () => {
	return (
		<section className='px-5 md:px-3 max-w-3xl mx-auto py-10' id='conoceme'>
			<h2 className='text-step-1 text-black uppercase font-bold mb-4 border-gray-500 dark:border-gray-100 dark:text-white'>
				Sobre mí
			</h2>
			<div className='flex flex-col gap-10 justify-center items-center md:flex-row md:items-center mb-10 md:mb-20 mt-10'>
				<div>
					<Lottie src='lottie/about.json' className='w-full h-full max-w-[200px]' />
				</div>
				<div className='flex-1 text-step--1'>
					<p className='mb-4 text-gray-800 dark:text-white'>
						Comencé mi carrera en la programación en el año 2020, cuando tomé mi primer curso
						de programación en línea. Desde entonces, he estado trabajando en proyectos
						personales y colaborando con diferentes empresas y organizaciones.
					</p>
					<p className='mb-4 text-gray-900 font-semibold dark:text-gray-400'>
						Mi objetivo es crear productos que ofrezcan experiencias excepcionales, con un
						diseño atractivo, intuitivo y de alta calidad.
					</p>
					<p className='text-gray-800 dark:text-white'>
						Estoy siempre dispuesto a aprender nuevas tecnologías y a afrontar nuevos desafíos
						laborales que me permitan seguir creciendo profesionalmente.
					</p>
				</div>
			</div>
			<div>
				<h2 className='text-step-1 uppercase font-bold text-black dark:text-white'>
					Mis Skills:
				</h2>

				{/* Frontend */}
				<div className='flex flex-wrap'>
					<div className='w-1/2 md:w-1/3 mt-4'>
						<h3 className='mb-2 text-xl font-semibold dark:text-white'>Frontend</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{abilities
								.filter(({ type }) => type === 'Frontend')
								.map((ability) => (
									<li key={ability.name}>{ability.name}</li>
								))}
						</ul>
					</div>
					{/* Backend */}
					<div className='w-1/2 md:w-1/3'>
						<h3 className='mb-2 text-xl font-semibold mt-4 dark:text-white'>Backend</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{abilities
								.filter(({ type }) => type === 'Backend')
								.map((ability) => (
									<li key={ability.name}>{ability.name}</li>
								))}
						</ul>
					</div>
					{/* Backend */}
					<div className='w-1/2 md:w-1/3 md:pt-3'>
						<h3 className='mb-2 text-xl font-semibold mt-4 dark:text-white'>DataBase</h3>
						<ul className='text-gray-500 dark:text-gray-400'>
							{abilities
								.filter(({ type }) => type === 'Database')
								.map((ability) => (
									<li key={ability.name}>{ability.name}</li>
								))}
						</ul>
					</div>
				</div>
			</div>
		</section>
	);
};
