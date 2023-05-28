import classNames from 'classnames';
import React, { AnchorHTMLAttributes } from 'react';
import NextLink from 'next/link';

import css from './Link.module.css';

type Props = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> & {
	variant?: 'underline' | 'default';
	href: string;
};

export default function Link({ variant, href, className, ...props }: Props) {
	className = classNames(className, variant && css[variant]);
	const isAnchor = href.startsWith('#');
	const isExternal = href.startsWith('http');
	const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

	if (isAnchor || isExternal) {
		return <a className={className} href={href} {...props} {...externalProps} />;
	}

	return <NextLink className={className} href={href} {...props} />;
}
