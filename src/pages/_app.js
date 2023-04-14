import '@/styles/globals.css';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
	return (
		<>
			<Head>
				<title>Steve&apos;s Pomodoro Timer</title>
			</Head>
			<Component {...pageProps} />;
		</>
	);
}
