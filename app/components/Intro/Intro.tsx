import css from './Intro.module.css';
import Image from 'next/image';
import Picture from './dude.png';
import Button from '../Button/Button';

export default function Intro() {
	return (
		<section className={css.root}>
			<h1 className={css.title}>Um slogan <br /> chamativo aqui.</h1>
			<p className={css.text}>
				Um texto sobre o seu produto ou serviço. Explique <b>porque ele é valioso</b> e direcione o usuário ao próximo objetivo.
			</p>

			<menu className={css.actions}>
				<li>
					<Button className={css.cta}>Eu quero!</Button>
				</li>
				<li>

					<Button className={css.secondary} variant='border'>Conhecer mais</Button>
				</li>
			</menu>

			<Image className={css.pic} src={Picture} loading="eager" alt="Alguma imagem simulada" quality={90} />
		</section>
	);
}
