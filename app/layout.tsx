import { Metadata } from 'next'
import './globals.css'
import { Poppins } from 'next/font/google'
import { ReactNode } from 'react'
import {Header} from './components/Header'
import Footer from './components/Footer/Footer'

const inter = Poppins({ weight: ['400', '600', '700', '800'], subsets: ['latin'] })

export const metadata: Metadata = {
	title: 'Nice',
	description: 'Test task page, generic mock site',
}

interface Props {
	children: ReactNode
}

export default function RootLayout({
	children,
}: Props) {
	return (
		<html lang="pt" >
			<body className={inter.className}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	)
}
