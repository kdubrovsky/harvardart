import css from './Layout.module.css';

interface LayoutProps {
	children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => (
	<div className={css.layout}>{children}</div>
);

export default Layout;
