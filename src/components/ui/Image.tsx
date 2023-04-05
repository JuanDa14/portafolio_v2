import { FC } from 'react';
import Image from 'rc-image';

interface Props {
	src: string;
	src64?: string;
	width?: number;
	height?: number;
	preview?: boolean;
	style?: React.CSSProperties;
	className?: string;
	alt?: string;
}

export const MyImage: FC<Props> = ({
	src,
	src64,
	width,
	height,
	className,
	alt,
	preview = false,
	style,
}) => {
	return (
		<figure>
			<Image
				src={src}
				alt={alt}
				height={height}
				width={width}
				style={style}
				className={className}
				placeholder={
					<Image className={className} style={style} preview={preview} src={src64} />
				}
				preview={preview}
			/>
		</figure>
	);
};
