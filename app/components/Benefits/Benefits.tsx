import Image from 'next/image';
import css from './Benefits.module.css';
import { BENEFITS } from './benefits';
import cn from 'classnames';

export default function Benefits() {
	return (
		<section className={css.root}>
			<h2 className={cn('title', css.title)}>Um subtítulo para quem rolou até aqui!</h2>
			<p className={css.lead}>Aproveite esta seção para destacar os benefícios do seu produto ou serviço. Palavras-chave ajudam no SEO.</p>

			<ul className={css.list}>
				{BENEFITS.map((benefit) => (
					<li key={benefit.icon} className={css.card}>
						<Image className={css.icon} src={benefit.icon} alt={benefit.title} width={171} height={178} />
						<h3 className={css.subtitle}>{benefit.title}</h3>
						{benefit.description}
						<button className={css.plus} type="button" aria-label="Some action"></button>
					</li>
				))}
			</ul>
		</section>
	);
}
