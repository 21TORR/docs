import styles from './index.module.css';

import headerImage from "@site/static/img/header.jpg";

import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@components/HomepageFeatures';


function HomepageHeader ()
{
	const {siteConfig} = useDocusaurusContext();

	return (
		<header className={clsx('hero hero--primary', styles.heroBanner)}>
			<div
				className={styles.heroBackground}
				style={{
					backgroundImage: `url(${headerImage})`,
				}}
			/>
			<div className={`container ${styles.heroContent}`}>
				<h1 className="hero__title">{siteConfig.title}</h1>
				<p className="hero__subtitle">{siteConfig.tagline}</p>
			</div>
		</header>
	);
}

export default function Home (): JSX.Element
{
	return (
		<Layout
			title={`👋`}
			description="Documentation for all our tools built at 21TORR"
		>
			<HomepageHeader />
			<main>
				<HomepageFeatures />
			</main>
		</Layout>
	);
}
