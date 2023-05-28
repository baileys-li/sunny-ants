'use client';

import { useToggle } from '@/app/hooks/toogle';
import Logo from '../Logo/Logo';
import NavigationList from '../NavigationList/NavigationList';
import Socials from '../Socials/Socials';
import css from './Header.module.css';
import cn from 'classnames';

export default function Header() {
	const [isNavOpened, changeNavState] = useToggle(false);

	const label = `${isNavOpened ? 'Mostrar' : 'Ocultar'} navegação`;

	return (
		<header className={css.root}>
			<Logo alt="Nice" lang="en" />
			<nav className={css.nav}>
				<button className={css.toggle} type="button" onClick={() => changeNavState()} aria-controls="nav-list" aria-label={label} title={label}>
					<svg width={24} height={24} fill="currentColor" aria-hidden={true}>
						<use href="/stack.svg#nav" className={cn(css.icon, isNavOpened && css.hidden)} />
						<use href="/stack.svg#close" className={cn(css.icon, !isNavOpened && css.hidden)} />
					</svg>
				</button>
				<NavigationList id="nav-list" className={cn(css.list, isNavOpened && css.opened)}  />
			</nav>

			<Socials className={css.socials}/>
		</header>
	);
}
