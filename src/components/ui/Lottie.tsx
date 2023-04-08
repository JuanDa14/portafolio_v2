import { FC, useContext } from 'react';
import { Player } from '@lottiefiles/react-lottie-player';
import { UIContext } from '../../context';

interface Props {
	src: string;
	className?: string;
	loop?: boolean;
	autoplay?: boolean;
}

export const Lottie: FC<Props> = ({ src, className, loop = true, autoplay = true }) => {
	const { completeLoading } = useContext(UIContext);

	return (
		<Player
			onEvent={(e) => {
				if (e === 'load') {
					setTimeout(() => {
						completeLoading();
					}, 2000);
				}
			}}
			loop={loop}
			autoplay={autoplay}
			src={src}
			className={className}
		/>
	);
};
