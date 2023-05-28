import classNames from 'classnames';
import { AnchorHTMLAttributes, ButtonHTMLAttributes } from 'react';
import css from './Button.module.css';
import Link from '../Link/Link';

type CommonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'id' | 'className' | 'children'> & {
	variant?: 'default' | 'border' | 'white';
};

type ButtonProps = Pick<ButtonHTMLAttributes<HTMLButtonElement>, 'onClick' | 'type' | 'disabled'>;

type AnchorProps = Pick<AnchorHTMLAttributes<HTMLAnchorElement>, 'onClick'> & {
	href: string;
};

type Props = CommonProps & (ButtonProps | AnchorProps);

export default function Button({ className, variant = 'default', ...props }: Props) {
	className = classNames(css[variant], className);
	if ('href' in props) return <Link className={className} {...props} />;

	const { type = 'button', ...rest } = props;
	return <button className={className} type={type} {...rest} />;
}
