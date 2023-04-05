import { Fade } from 'react-awesome-reveal';
import { MyImage } from './ui';

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
							<button
								onClick={() =>
									window.open(
										'https://drive.google.com/file/d/1gUgacjyr-a5Z9P1hFwlQy1PdDdm3f6ta/view?usp=share_link'
									)
								}
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
							</button>
						</div>
					</div>
				</Fade>
				<Fade direction='right' triggerOnce>
					<div>
						<MyImage
							src64='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAAAAAAAAAAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCACCAIIDASIAAhEBAxEB/8QAGgAAAwEBAQEAAAAAAAAAAAAAAAIDBAEGBf/EAB0QAQEBAQEBAQEBAQAAAAAAAAABAhEDEjEhBCL/xAAYAQEBAQEBAAAAAAAAAAAAAAABAAIDBP/EABoRAQEBAQEBAQAAAAAAAAAAAAABAhExIUH/2gAMAwEAAhEDEQA/APNxXy/UJVvK/wDSjy/rd5tGGbzacB6srZMXJ5A6xyk0pwtgKOiVXUJYhSRTJeHyWKrhfCGVsUsr5PEs1SVIwc6EXiZV/K/2MmddaPK/2Mz489j6Pk1YZPGtnmuvRlbKkhMxWROsLxyxTjlgKFyS5aLlO5LNS47IawcLFNlXNSh5UytmnlRlPNFKdCfQi8PLytPlf7GVfwv4NeManx9bw/I2+bD/AJ/yN3kx11y04iuYnhbMToOCw8g4UlYnYvYTUQqFjnFLCWFilNK450sqSm+kuu9AU+gn0IvHLeCLR4T8OvGNePqf5/yN/kw/55/I3+TnHXLThfKOFsl0PIOOx1IlhNRSk0RUtROxXSdLFTpT0tTLg6AgOgAF5POba1eOf+oWYafHH9N+uF12tnhPxu8mTyjZ5jj0ZaML5QwtkOikDko6SKSu2ktLNLolNaWlikpeH4OJknBxT5HyEnwK/ISecmWjxw5nz/rR55dLHlx71XzjThHEXwxx6s1bKkqWTyjjrKp0dJ1y6SNaW0t0W6IprXC9dhYrvDSCQ+Yg5Mu/KkyaZSR+Qv8AISfAmFM5NMmkbcIbMVyTMUgdoeO9KOjjcprS3RbSXQ4emui/Sd059IWrSnyhmrYLK2YtmJ4XxEjZyeZdzDzKSfyFfkJPP8NI67GnGOw0cjqbjrloLQ3C6qetG1UtVFy6cmiWiVCr4rR5suGrzQavNoxGfzacJLZikhcxSIucBuBJ5x2AFxho6Am4KWgJuJaS0AilRAAyt5tXmAg1ebVgBFfKkARdACT/2Q=='
							src='/images/perfil.png'
							alt='perfil'
							className='w-full sm:w-[350px] h-full rounded-full max-w-[15rem] sm:max-w-2xl '
						/>
					</div>
				</Fade>
			</div>
		</section>
	);
};
