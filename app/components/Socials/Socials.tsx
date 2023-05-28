import { HTMLAttributes } from 'react';
import Link from '../Link/Link';
import { SOCIALS, SocialItem } from './data';
import css from './Socials.module.css';
import classNames from 'classnames';

const SocialItem = ({ href, text, iconId }: SocialItem) => (
	<Link variant="default" href={href} aria-label={text} title={text}>
		<svg aria-hidden={true} width={18} height={18} fill="currentColor">
			<use xlinkHref={`/socials.svg#${iconId}`} />
		</svg>
	</Link>
);

type Props = Pick<HTMLAttributes<HTMLElement>, 'className'>;

export default function Socials({ className }: Props) {
	className = classNames(className, css.root);

	return (
		<address className={className}>
			{SOCIALS.map((social) => (
				<SocialItem key={social.href} {...social} />
			))}
		</address>
	);
}
