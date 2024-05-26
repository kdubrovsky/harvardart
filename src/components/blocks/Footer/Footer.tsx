import css from './Footer.module.css';

import Copyright from '@elements/Copyright/Copyright';

const Footer = () => (
	<footer className={css.footer}>
		<Copyright title='© President and Fellows of Harvard College' />
		<a className={css.link} href='https://github.com/kdubrovsky/harvardart'>
			Github
		</a>
	</footer>
);

export default Footer;
