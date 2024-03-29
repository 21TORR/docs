// @ts-check The whole file be checked

// @ts-ignore this package has no types
const {themes} = require('prism-react-renderer');

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: '21TORR Docs',
	tagline: 'The documentation for all our tools',
	url: 'https://21torr-docs.fly.dev/',
	baseUrl: '/',
	onBrokenLinks: 'throw',
	onBrokenMarkdownLinks: 'throw',
	favicon: 'img/favicon.ico',

	plugins: [
		'docusaurus-plugin-sass',
	],

	// Even if you don't use internalization, you can use this field to set useful
	// metadata like html lang. For example, if your site is Chinese, you may want
	// to replace "en" with "zh-Hans".
	i18n: {
		defaultLocale: 'en',
		locales: ['en'],
	},

	presets: [
		[
			'classic',
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: require.resolve('./sidebars.js'),
					editUrl: 'https://github.com/21TORR/docs/tree/live/',
				},
				blog: {
					showReadingTime: true,
					editUrl: 'https://github.com/21TORR/docs/tree/live/',
				},
				theme: {
					customCss: require.resolve('./assets/scss/custom.scss'),
				},
			}),
		],
	],

	themeConfig:
	/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			navbar: {
				title: 'Docs',
				logo: {
					alt: '21TORR',
					src: 'img/logo-light.svg',
					srcDark: 'img/logo-dark.svg',
				},
				items: [
					{
						type: 'doc',
						docId: 'php/index',
						position: 'left',
						label: 'PHP',
					},
					{
						type: 'doc',
						docId: 'ts-scss/index',
						position: 'left',
						label: 'TS & SCSS',
					},
					{
						type: 'doc',
						docId: 'tools/index',
						position: 'left',
						label: 'Tools',
					},
					{
						to: '/blog',
						label: 'Changelog',
						position: 'right',
					},
					{
						href: 'https://www.21torr.com',
						label: 'Contact',
						position: 'right',
					},
				],
			},
			footer: {
				style: 'dark',
				links: [
					{
						title: 'Docs',
						items: [
							{
								label: 'PHP',
								to: '/docs/php',
							},
							{
								label: 'TS & SCSS',
								to: '/docs/ts-scss',
							},
							{
								label: 'Tools',
								to: '/docs/tools',
							},
							{
								label: 'Changelog',
								to: '/blog',
							},
						],
					},
					{
						title: '21TORR',
						items: [
							{
								label: 'Our website',
								href: 'https://www.21torr.com',
							},
							{
								label: 'Github',
								href: 'https://github.com/21TORR',
							},
						],
					},
					{
						title: 'Social',
						items: [
							{
								label: 'Instagram',
								href: 'https://www.instagram.com/21torr/',
							},
							{
								label: 'Twitter',
								href: 'https://twitter.com/21TORR',
							},
							{
								label: 'LinkedIn',
								href: 'https://www.linkedin.com/company/21torr/',
							},
						],
					},
				],
				copyright: `© 21TORR ${new Date().getFullYear()}`,
			},
			prism: {
				theme: themes.github,
				darkTheme: themes.vsDark,
				additionalLanguages: [
					"php",
					"twig",
				],
			},
		}),
};

module.exports = config;
