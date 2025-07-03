import styles from "./AddedBadge.module.css";

import type {ReactElement} from "react";
import React from "react";
import { Icon } from '@iconify/react';

export type AddedBadgeProps = Readonly<{
	package: string;
	version: string;
}>;

export function AddedBadge (props: AddedBadgeProps): ReactElement | null
{
	const version = "v" + props.version.replace(/^v+/, "");

	return (
		<div className={`alert--info ${styles.container}`}>
			<span className={styles.badge}>
				<Icon
					icon="line-md:document-add"
					className={styles.icon}
					height="24px"
				/>
				<span>
					Added in <code className={styles.code}>{props.package} {version}</code>
				</span>
			</span>
		</div>
	);
}
