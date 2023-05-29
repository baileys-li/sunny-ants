
import About from './components/About/About'
import Benefits from './components/Benefits/Benefits'
import Contacts from './components/Contacts/Contacts'
import Intro from './components/Intro/Intro'

export default function Home() {
	return (
		<main>
			<Intro />
			<Benefits />
			<About />
			<Contacts />
		</main>
	)
}
