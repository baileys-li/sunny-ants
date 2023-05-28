import Image from 'next/image';
import Button from '../Button/Button';
import css from './About.module.css';
import Link from '../Link/Link';

export default function About() {
	return (
		<section className={css.root}>
			<Link variant="tag" className={css.tag} href="#contecomagente">
				#contecomagente
			</Link>

			<h2 className={css.title}>Simples, rápido e do seu jeito.</h2>
			<p className={css.text}>
				Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para{" "}
				<b>conquistar seu cliente.</b>
			</p>

			<Button className={css.cta}>Eu quero!</Button>

			<Image className={css.image} alt="Alguma imagem simulada" src="/about/dude.png" width={707} height={752} quality={90} />

			<small className={css.note}>Todas as imagens deste template são do Iconscout.</small>
		</section>
	);
}
