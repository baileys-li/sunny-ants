'use client';

import Image from 'next/image';
import Button from '../Button/Button';
import css from './About.module.css';
import Link from '../Link/Link';
import { useEffect } from 'react';
import { throttle } from '@/app/utils';

const throttledMouseWatcher = throttle((evt: MouseEvent) => {
	const { clientX, clientY } = evt;
	const { innerHeight, innerWidth } = window;

	const middleX = innerWidth / 2;
	const middleY = innerHeight / 2;

	const offsetX = ((clientX - middleX) / middleX);
	const offsetY = ((clientY - middleY) / middleY);

	document.documentElement.style.setProperty('--mouse-x', `${offsetX}`);
	document.documentElement.style.setProperty('--mouse-y', `${offsetY}`);
}, 500);

export default function About() {
	useEffect(() => {
		window.addEventListener('mousemove', throttledMouseWatcher);

		return () => window.removeEventListener('mousemove', throttledMouseWatcher);
	});
	return (
		<section className={css.root}>
			<Link variant="tag" className={css.tag} href="#contecomagente">
				#contecomagente
			</Link>

			<h2 className={css.title}>Simples, rápido e do seu jeito.</h2>
			<p className={css.text}>
				Mostre os valores da sua marca e como ela pode fazer parte da vida do usuário que está lendo. Gerar identificação é a chave para{' '}
				<b className='mark'>conquistar seu cliente.</b>
			</p>

			<Button className={css.cta}>Eu quero!</Button>

			<Image
				className={css.image}
				alt="Alguma imagem simulada"
				src="/about/dude.png"
				width={707}
				height={752}
				quality={90}
				priority={false}
			/>

			<small className={css.note}>Todas as imagens deste template são do Iconscout.</small>
		</section>
	);
}
