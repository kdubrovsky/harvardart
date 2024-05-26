import css from './Copyright.module.css';

interface CopyrightProps {
	title: string;
}

const Copyright = ({ title }: CopyrightProps) => (
	<p className={css.copyright}>{title}</p>
);

export default Copyright;
