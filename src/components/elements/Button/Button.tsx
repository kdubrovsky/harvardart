import css from './Button.module.css';

import Icon from '@elements/Icon/Icon';

interface ButtonProps {
	title: string;
	icon: string;
	iconOnly?: boolean;
}

const Button = ({ title, icon, iconOnly = false }: ButtonProps) => {
	const titleClassNames = iconOnly ? 'visually-hidden' : css.title;

	return (
		<button className={css.button}>
			<Icon name={icon} width='2em' height='2em' />
			<span className={titleClassNames}>{title}</span>
		</button>
	);
};

export default Button;
