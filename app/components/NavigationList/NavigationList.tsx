
import classNames from 'classnames';
import Link from '../Link/Link';
import { LINKS, NavigationLink } from './links';
import { HTMLAttributes } from 'react';
import css from './NavigationList.module.css';

const NavLink = ({ href, text }: NavigationLink) => (
	<li>
		<Link variant='default' href={href}>{text}</Link>
	</li>
);

type Props = Pick<HTMLAttributes<HTMLUListElement>, 'id' | 'className' | 'onTransitionEnd'>

export default function NavigationList({className, ...props}: Props) {
	className = classNames(className, css.root)
	return (
		<ul className={className} {...props}>
			{LINKS.map((link) => (
				<NavLink key={link.href} {...link} />
			))}
		</ul>
	);
}
