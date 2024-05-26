import Button from '@elements/Button/Button';
import css from './ArtTitle.module.css';

interface ArtTitleProps {
	title: string;
}

const ArtTitle = ({ title }: ArtTitleProps) => (
	<div className={css.wrapper}>
		<h2 className={css.title}>{title}</h2>
		<Button title='Copy link' icon='getlink' iconOnly />
	</div>
);

export default ArtTitle;
