import { Player } from '@lottiefiles/react-lottie-player';

export const Loader = () => {
	return (
		<div
			className={`bg-white dark:bg-dark-container w-full h-screen flex items-center justify-center`}
		>
			<Player loop autoplay className='max-w-sm' src='lottie/carga2.json' />
		</div>
	);
};
