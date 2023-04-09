import { useEffect, useState, useContext } from 'react';
import { HamburgerButton, ModeSwitch } from './';
import { UIContext } from '../../context';

export const Header = () => {
	const { theme } = useContext(UIContext);

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
				isScrolled ? '' : 'border-b shadow-sm border-white dark:border-gray-500'
			} fixed top-0 w-full z-50 text-pallete-light-gray-500 transition-all duration-500 ease-in-out font-inter bg-white dark:bg-dark-body`}
			style={{
				backdropFilter: 'saturate(180%) blur(5px)',
				background: `${
					isScrolled
						? theme === 'light'
							? 'hsla(0, 0%, 100%, .8)'
							: 'hsla(210, 44%, 13%, .8)'
						: ''
				}`,
			}}
		>
			{/* Escritorio */}
			<div className='hidden py-1 px-5 md:px-0 mx-auto sm:flex justify-between items-center max-w-3xl'>
				<a href='#inicio' className='hover:scale-110 transition-all duration-300 ease-in-out'>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='w-7 h-7 text-black dark:text-white'
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
						<li className='py-4 transition-colors duration-300 ease-in-out'>
							<a
								title='Inicio'
								href='#inicio'
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
							>
								Inicio
							</a>
						</li>
						<li className='py-4 transition-colors duration-300 ease-in-out'>
							<a
								title='Conoceme'
								href='#conoceme'
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
							>
								Conoceme
							</a>
						</li>
						<li className='py-4 transition-colors duration-300 ease-in-out'>
							<a
								title='Proyectos'
								href='#proyectos'
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
							>
								Proyectos
							</a>
						</li>
						<li className='py-4 transition-colors duration-300 ease-in-out'>
							<a
								title='Contacto'
								href='#contacto'
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
							>
								Contacto
							</a>
						</li>
						<ModeSwitch />
					</ul>
				</nav>
			</div>

			{/* Mobile */}
			<div className='px-5 sm:hidden flex flex-col gap-4 py-4'>
				<div className='flex justify-between'>
					<a href='#inicio' className='text-black dark:text-white'>
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
					<div className='flex justify-center items-center gap-5'>
						<ModeSwitch />
						<HamburgerButton showMenu={showMenu} setShowMenu={setShowMenu} />
					</div>
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
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
							>
								Inicio
							</a>
						</li>
						<li className='text-step-0 py-4 transition-colors duration-300 ease-in-out'>
							<a
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
								title='Conoceme'
								href='#conoceme'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Conoceme
							</a>
						</li>
						<li className='text-step-0 py-4 transition-colors duration-300 ease-in-out'>
							<a
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
								title='Proyectos'
								href='#proyectos'
								onClick={() => {
									setShowMenu(!showMenu);
								}}
							>
								Proyectos
							</a>
						</li>
						<li className='text-step-0 py-4 transition-colors duration-300 ease-in-out'>
							<a
								className='text-black dark:text-white hover:text-blue-500 dark:hover:text-gray-400'
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
