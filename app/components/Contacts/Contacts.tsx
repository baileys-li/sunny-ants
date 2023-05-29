import cn from 'classnames';
import css from './Contacts.module.css';
import Link from '../Link/Link';
import Button from '../Button/Button';

export default function Contacts() {
	return (
		<section className={css.root} id="contact-us">
			<h2 className={cn('title', css.title)}>Ainda tem dúvidas? Fale conosco!</h2>
			<div className={css.wrapper}>
				<p className={css.text}>
					Ofereça um meio de comunicação direto. Pode ser um{' '}
					<Link href="mailto:contato@email.com.br" variant="underline">
						contato@email.com.br
					</Link>
				</p>
				<p className={css.text}>
					Ou crie um formulário ao lado que entrem em contato <b className="mark">o mais rápido possível!</b>{' '}
				</p>
				<address className={css.whatsapp}>
					<Link href="https://wa.me/10000000000" variant="underline">
						{' '}
						Hey! Estamos no whatsapp!
					</Link>
				</address>
			</div>

			<form action="" className={css.form}>
				<label className={css.label}>
					Nome
					<input className={css.input} type="text" name="name" placeholder="Nome Sobrenome" autoComplete="name" />
				</label>
				<label className={css.label}>
					Email
					<input className={css.input} type="email" name="email" placeholder="nome@email.com.br" autoComplete="email" />
				</label>
				<label className={css.label}>
					Telefone
					<input className={css.input} type="tel" name="tel" placeholder="21 9988-7766" autoComplete="tel" />
				</label>

				<Button className={css.submit} type="submit">
					Enviar!
				</Button>
			</form>
		</section>
	);
}
