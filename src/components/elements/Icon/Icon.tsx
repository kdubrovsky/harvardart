import css from './Icon.module.css';

interface IconProps {
	name: string;
	width?: string;
	height?: string;
}

const Icon = ({ name, width, height }: IconProps) => (
	<span style={{ width, height }}>
		<svg
			className={css.iconSvg}
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'
		>
			<use xlinkHref={`/spritemap.svg#${name}`} />
		</svg>
	</span>
);

export default Icon;
