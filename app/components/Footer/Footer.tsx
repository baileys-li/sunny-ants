import Button from '../Button/Button';
import Link from '../Link/Link';
import Logo from '../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import Socials from '../Socials/Socials';
import css from './Footer.module.css';

export default function Footer() {
	return (
		<footer className={css.root}>
			<Logo alt="Nice" lang="en" width={87} />

			<div className={css.wrapper}>
				<NavigationList className={css.nav}/>
				<Socials />
			</div>

			<form className={css.form}>
				<label className={css.label} htmlFor="footer-inp">Receba as novidades do nice</label>
				<input className={css.input} type="email" name="name" id="footer-inp" placeholder="nome@email.com" required />
				<Button className={css.submit} type="submit" variant='white'>Inscrever</Button>
			</form>

			<small className={css.copy}>
				Nice template by{' '}
				<Link href="https://www.figma.com/@lopesluiza" variant="default">
					@lopesluiza
				</Link>
				<br />
				on Figma - <time>2021</time>
			</small>
		</footer>
	);
}
