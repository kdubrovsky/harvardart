import css from './Logotype.module.css';

interface LogotypeProps {
	title: string;
}

const Logotype = ({ title }: LogotypeProps) => (
	<div className={css.logotype}>
		<h1 className='visually-hidden'>{title}</h1>
		<img src='/images/logo.svg' alt={title} />
	</div>
);

export default Logotype;
