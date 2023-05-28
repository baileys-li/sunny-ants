import Link from 'next/link';
import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css'


type CommonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'className' | 'children'> & {
	variant?: 'default' | 'border' | 'white';
};

type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'>;

type AnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> & {
	href: string;
};

type Props = CommonProps & (ButtonProps | AnchorProps);

export default function Button({className, variant = 'default', ...props}: Props) {
	const isLink = 'href' in props;

	className = classNames(css[variant], className);


	if (isLink) {
		const { href, ...rest } = props;
		const isAnchor = href.startsWith('#');
		const isExternal = href.startsWith('http');
		const externalProps = isExternal ? { target: '_blank', rel: 'noopener noreferrer' } : {};

		if (isAnchor || isExternal) {
			return <a className={className} href={href} {...rest} {...externalProps} />;
		}

		return <Link  className={className} href={href} {...rest} />
	}

	const { type = 'button', ...rest } = props;

	return <button  className={className} type={type} {...rest} />;
}
