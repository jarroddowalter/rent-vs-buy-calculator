import { AppProps } from "next/app";
import { MantineThemeOverride, MantineProvider } from "@mantine/core";
import "../styles/globals.css";

const mantineTheme: MantineThemeOverride = {
	colorScheme: "dark",
	fontFamily: "IBM Plex Mono, Courier, monospace",
	fontFamilyMonospace: "IBM Plex Mono, Courier, monospace",
	headings: { fontFamily: "IBM Plex Mono, Courier, monospace" },
	lineHeight: 1.55,
	breakpoints: {
		xs: 480,
		sm: 720,
		md: 960,
		lg: 1200,
		xl: 1600,
	},
};

export default function App(props: AppProps) {
	const { Component, pageProps } = props;

	return (
		<MantineProvider withGlobalStyles withNormalizeCSS theme={mantineTheme}>
			<Component {...pageProps} />
		</MantineProvider>
	);
}
