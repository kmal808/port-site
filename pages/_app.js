import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Nav from '../components/Nav'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
	return (
		<>
			<ThemeProvider
				attribute='class'
				enableSystem={true}
				defaultTheme={'dark'}
			>
				<Nav />
				<Component {...pageProps} />
			</ThemeProvider>
		</>
	)
}

export default MyApp
