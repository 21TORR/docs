import React, {ReactElement} from "react";
import Link from "@docusaurus/Link";

import styles from "./LinkList.module.css";

// @ts-ignore PNG imports work, they are imported as data url
import packagistLogo from "./icons/packagist.png";
import GithubLogo from "./icons/github.svg";
import NpmLogo from "./icons/npm.svg";

/**
 * Parses a package name from a URL
 */
function parsePackageName (url: string)
{
	const match = /\/(?<name>[^\/]+\/[^\/]+)\/?$/.exec(url);

	if (!match)
	{
		throw new Error(`Could not parse package URL: ${url}`);
	}

	return match.groups.name;
}


export interface LinkListProps
{
	npm?: string;
	github?: string;
	packagist?: string;
}

export function LinkList (props: LinkListProps): ReactElement | null
{
	if (!props.github && !props.npm && !props.packagist)
	{
		return null;
	}

	const composerPackage = props.packagist
		? parsePackageName(props.packagist)
		: undefined;
	const npmPackage = props.npm
		? parsePackageName(props.npm)
		: undefined;

	return (
		<ul className={styles.linklist}>
			{props.github && (
				<li>
					<Link
						to={props.github}
						className={styles.link}
					>
						<span className={styles.icon}><GithubLogo /></span> Github
					</Link>
				</li>
			)}
			{props.npm && (
				<li>
					<Link
						to={props.npm}
						className={styles.link}
						title="Link to npm"
					>
						<code className={styles.code}><span className={`${styles.icon} ${styles.npmIcon}`}><NpmLogo /></span> {npmPackage}</code>
					</Link>
				</li>
			)}
			{props.packagist && (
				<li>
					<Link
						to={props.packagist}
						className={styles.link}
						title="Link to packagist.org"
					>
						<code className={styles.code}><span className={styles.icon}><img src={packagistLogo} alt="" /></span> {composerPackage}</code>
					</Link>
				</li>
			)}
		</ul>
	);
}
