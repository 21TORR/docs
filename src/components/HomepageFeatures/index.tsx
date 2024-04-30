import styles from './styles.module.css';

import joinImage from "@site/static/img/home-join.jpg";
import helpImage from "@site/static/img/home-help.jpg";
import placeImage from "@site/static/img/home-place.jpg";

import React, {type ReactNode} from "react";
import clsx from 'clsx';
import Link from "@docusaurus/Link";


type FeatureItem = {
  title: string;
  image: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'All in one place',
    image: <img src={placeImage} alt="Photo from coffee house in Jakarta, Indonesia" />,
    description: (
      <>
        This website contains all documentation for all of our open-source tools.
      </>
    ),
  },
  {
    title: 'Help appreciated',
    image: <img src={helpImage} alt="Photo of a building during construction" />,
    description: (
      <>
          The docs can be edited by everyone. Feel welcome to write docs or create issues about missing / unclear topics in the <Link href="https://github.com/21TORR/docs">repository</Link>.
      </>
    ),
  },
  {
    title: 'Work with us',
    image: <img src={joinImage} alt="Photo from Stuttgart, Germany" />,
    description: (
      <>
          You like our components? Come <Link href="https://www.21torr.com/career">join our team</Link> and work with us to make them even better.
      </>
    ),
  },
];

function Feature({title, image, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className={`text--center ${styles.featureImage}`}>{image}</div>
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
