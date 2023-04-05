import { useEffect, useState } from 'react';
import { HamburgerButton } from './HamburgerButton';

export const Header = () => {
	const [showMenu, setShowMenu] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		if (scrollPosition > 0) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	return (
		<header
			className={`${
				isScrolled ? '' : 'border-b shadow-sm'
			} fixed top-0 w-full z-50 text-pallete-light-gray-500 transition-all duration-500 ease-in-out font-inter`}
			style={{
				backdropFilter: 'saturate(180%) blur(5px)',
				background: `${isScrolled ? 'hsla(0, 0%, 100%, .8)' : ''}`,
			}}
		>
			{/* Escritorio */}
			<div className='hidden py-1 px-5 md:px-0 mx-auto sm:flex justify-between items-center max-w-3xl'>
				<a href='#inicio' className='text-black'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-7 h-7'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
						/>
					</svg>
				</a>
				<nav>
					<ul className='flex gap-6 text-sm font-medium'>
						<li className='py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a title='Inicio' href='#inicio'>
								Inicio
							</a>
						</li>
						<li className='py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a title='Conoceme' href='#conoceme'>
								Conoceme
							</a>
						</li>
						<li className='py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a title='Proyectos' href='#proyectos'>
								Proyectos
							</a>
						</li>
						<li className='py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a title='Contacto' href='#contacto'>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</div>

			{/* Mobile */}
			<div className='px-5 sm:hidden flex flex-col gap-4 py-4'>
				<div className='flex justify-between'>
					<a href='#inicio' className='text-black'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'
							className='w-7 h-7'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5'
							/>
						</svg>
					</a>
					<HamburgerButton showMenu={showMenu} setShowMenu={setShowMenu} />
				</div>
				<nav className={`h-screen ${showMenu ? '' : 'hidden'}`}>
					<ul className='flex flex-col justify-center items-center gap-6 font-bold text-black'>
						<li className='text-step-0 py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a
								title='Inicio'
								href='#inicio'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Inicio
							</a>
						</li>
						<li className='text-step-0 py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a
								title='Conoceme'
								href='#conoceme'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Conoceme
							</a>
						</li>
						<li className='text-step-0 py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a
								title='Proyectos'
								href='#proyectos'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Proyectos
							</a>
						</li>
						<li className='text-step-0 py-4 hover:text-blue-500 transition-colors duration-300 ease-in-out'>
							<a
								title='Contacto'
								href='#contacto'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Contacto
							</a>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};
