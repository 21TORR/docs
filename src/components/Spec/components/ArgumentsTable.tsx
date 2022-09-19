import React, {ReactElement, ReactNode} from 'react';
import styles from "./ArgumentsTable.module.scss";

export interface Argument {
	name?: string;
	type: string;
	default?: string;
	description?: string;
}

export interface ArgumentsTableProps
{
	label: string;
	arguments?: Argument[];
}

function renderOptionalCode (value: string|undefined) : ReactNode
{
	return value
		? <code>{value}</code>
		: "—";
}

export function ArgumentsTable (props: ArgumentsTableProps): ReactElement|null
{
	const args = props.arguments ?? [];

	if (!args.length)
	{
		return null;
	}

	const hasNames = args.some(entry => null != entry.name);
	const hasDefault = args.some(entry => null != entry.default);

	return (
		<div>
			<div className={styles.headline}>{props.label}</div>
			<table className={styles.table}>
				<thead>
					<tr>
						{hasNames && (
							<th>name</th>
						)}
						<th>type</th>
						{hasDefault && (
							<th>default</th>
						)}
						<th>description</th>
					</tr>
				</thead>
				<tbody>
					{Object.values(args).map(entry => (
						<tr>
							{hasNames && (
								<td>{renderOptionalCode(entry.name)}</td>
							)}
							<td>{renderOptionalCode(entry.type)}</td>
							{hasDefault && (
								<td>{renderOptionalCode(entry.default)}</td>
							)}
							<td>{entry.description}</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
}
