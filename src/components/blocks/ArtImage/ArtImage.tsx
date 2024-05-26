import css from './ArtImage.module.css';

const ArtImage = () => (
	<main className={css.imageWrapper}>
		<img src='/images/test.jpeg' alt='test image' />
	</main>
);

export default ArtImage;
