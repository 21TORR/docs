import React, {ReactElement} from "react";
import Link from "@docusaurus/Link";

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
		<ul>
			{props.github && (
				<li><Link to={props.github}>Github</Link></li>
			)}
			{props.npm && (
				<li><Link to={props.npm}>npm</Link></li>
			)}
			{props.packagist && (
				<li><Link to={props.packagist}>packagist</Link></li>
			)}
		</ul>
	);
}
