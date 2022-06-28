import Nav from '../components/Nav'
import Main from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Head from 'next/head'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <>
      <Head>
        <title>Kurt | Full Stack Developer</title>
        <meta
          name='description'
          content="I'm a full stack developer specializing in building exceptional digital experiences"
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Main />
      <About />
      <Skills />
      <Projects />
    </>
  )
}
