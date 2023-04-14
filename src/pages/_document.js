import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang='en'>
			<Head>
				<meta
					name='description'
					content='A little Pomodoro timer for heightened effectiveness'
				/>
				<title>Steve&apos;s Pomodoro Timer</title>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
