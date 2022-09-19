import React, {ReactElement} from 'react';
import styles from './Spec.module.scss';
import CodeBlock from "@docusaurus/theme-classic/lib/theme/CodeBlock";
import {Props as CodeBlockProps} from "@theme/CodeBlock";
import dedent from "ts-dedent";
import {Argument, ArgumentsTable} from "./components/ArgumentsTable";

export interface SpecProps
{
	language: string;
	code: Omit<CodeBlockProps, "language" | "children">;
	children: string;

	/**
	 * Parameters of functions / methods
	 */
	params?: Argument[];

	/**
	 * Attributes in HTML / JSX code
	 */
	attrs?: Argument[];

	/**
	 * Unstructured or typed return values
	 */
	returns?: Omit<Argument, "default">[];

	/**
	 * Thrown exceptions
	 */
	throws?: Omit<Argument, "name"|"default">[];
}

export function Spec (props: SpecProps): ReactElement|null
{
	const code = dedent(props.children);

	return (
		<div className={styles.spec}>
			<CodeBlock
				{...props.code}
				language={props.language}
				className={styles.codeBlock}
			>
				{code}
			</CodeBlock>
			<ArgumentsTable label="parameters" arguments={props.params} />
			<ArgumentsTable label="attributes" arguments={props.attrs} />
			<ArgumentsTable label="returns" arguments={props.returns} />
			<ArgumentsTable label="throws" arguments={props.throws} />
		</div>
	);
}
