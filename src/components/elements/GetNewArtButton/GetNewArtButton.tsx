import css from './GetNewArtButton.module.css';

import Button from '@elements/Button/Button';

const GetNewArtButton = () => (
	<div className={css.wrapper}>
		<Button title='Get new art!' icon='refresh' />
	</div>
);

export default GetNewArtButton;
