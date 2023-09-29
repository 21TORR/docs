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
function parsePackageName (url?: string)
{
	if (!url)
	{
		return undefined;
	}

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

	return (
		<ul className={styles.linklist}>
			{props.github && (
				<li>
					<Link
						to={props.github}
						className={styles.link}
						title="Link to Github repository"
					>
						<code className={styles.code}><span className={styles.icon}><GithubLogo /></span> {parsePackageName(props.github)}</code>
					</Link>
				</li>
			)}
			{props.npm && (
				<li>
					<Link
						to={props.npm}
						className={styles.link}
						title="Link to npm package"
					>
						<code className={styles.code}><span className={`${styles.icon} ${styles.npmIcon}`}><NpmLogo /></span> {parsePackageName(props.npm)}</code>
					</Link>
				</li>
			)}
			{props.packagist && (
				<li>
					<Link
						to={props.packagist}
						className={styles.link}
						title="Link to composer package on packagist.org"
					>
						<code className={styles.code}><span className={styles.icon}><img src={packagistLogo} alt="" /></span> {parsePackageName(props.packagist)}</code>
					</Link>
				</li>
			)}
		</ul>
	);
}
