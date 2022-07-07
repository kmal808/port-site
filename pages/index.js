import Head from 'next/head'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'

export default function Home() {
	return (
		<div>
			<Head>
				<title>Kurt Malley | Full Stack Developer</title>
				<meta
					name='description'
					content="I'm a full stack developer specializing in building exceptional digital experiences"
				/>
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Main />
			<About />
			<Skills />
			<Projects />
			<Contact />
		</div>
	)
}
