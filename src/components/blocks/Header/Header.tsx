import ArtTitle from '@elements/ArtTitle/ArtTitle';
import GetNewArtButton from '@elements/GetNewArtButton/GetNewArtButton';
import Logotype from '@elements/Logotype/Logotype';
import css from './Header.module.css';

const Header = () => (
	<header className={css.header}>
		<Logotype title='Harvard Art Museum' />
		<ArtTitle title='The new Dawn, 1986' />
		<GetNewArtButton />
	</header>
);

export default Header;
