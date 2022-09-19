import React, {ReactElement} from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import MountainImage from "@site/static/img/undraw_docusaurus_mountain.svg";
import TreeImage from "@site/static/img/undraw_docusaurus_tree.svg";
import ReactImage from "@site/static/img/undraw_docusaurus_react.svg";

type FeatureItem = {
  title: string;
  svg: ReactElement;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Use',
    svg: <MountainImage className={styles.featureSvg} role="img" />,
    description: (
      <>
        Docusaurus was designed from the ground up to be easily installed and
        used to get your website up and running quickly.
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    svg: <TreeImage className={styles.featureSvg} role="img" />,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    svg: <ReactImage className={styles.featureSvg} role="img" />,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
];

function Feature({title, svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">{svg}</div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
