import React, { useEffect, useState } from "react";

import clsx from "clsx";
import fetch from "node-fetch";

import Layout from "@theme/Layout";

import Link from "@docusaurus/Link";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

function Feature({ title, description }) {
  return (
    <div className={clsx("col col--4", styles.feature)}>
      <h2 className={clsx("features__heading", styles.features__heading)}>
        {title}
      </h2>
      <p className={clsx("features__heading", styles.features__content)}>
        {description}
      </p>
    </div>
  );
}

export default function Index() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;

  const [downloads, setDownloads] = useState(0);
  const [fetching, setFetching] = useState(false);

  const json = (res) => res.json();
  const noop = () => {};

  async function fetchStats() {
    if (fetching) return;

    setFetching(true);

    const [fetchedDownloads] = await Promise.all([
      fetch(
        "https://api.npmjs.org/downloads/range/2013-08-21:2100-08-21/textful"
      ).then(json, noop),
    ]);

    if (fetchedDownloads) {
      let finalDownloads = 0;
      for (const item of fetchedDownloads.downloads) {
        finalDownloads += item.downloads;
      }

      setDownloads(finalDownloads + 300);
    }
  }

  useEffect(() => {
    fetchStats();
  }, []);

  const features = [
    {
      title: "About",
      description: (
        <>
          Textful is a simple and modular{" "}
          <a href="https://nodejs.org">
            <strong>node.js</strong>
          </a>{" "}
          module that is capable of formatting string literals, reversing them,
          converting them to other formats and much more!
        </>
      ),
    },
    {
      title: "Why?",
      description: (
        <>
          <ul>
            <li>Object oriented</li>
            <li>Speedy and efficient</li>
            <li>Feature rich</li>
            <li>Well maintained</li>
          </ul>
        </>
      ),
    },
    {
      title: "Statistics",
      description: (
        <>
          <ul>
            <li>{downloads}+ downloads</li>
            <li>and... growing!</li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <Layout description="A simple and modular framework for formatting string literals.">
      <header className={clsx("hero hero--primary", styles.heroBanner)}>
        <div className="container">
          <img
            className="hero__brand-img"
            src="@site/static/img/Textful-Logo+White.svg"
            width="150px"
          />
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <code className="hero__install-command-container">npm i textful</code>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                "button button--secondary button--lg",
                styles.getStarted
              )}
              to={useBaseUrl("docs/general/welcome")}
            >
              Get Started
            </Link>
            <Link
              className={clsx(
                "button button--blurple button--lg",
                styles.getStarted
              )}
              to={"https://aktindo.me/discord"}
            >
              <i className="fab fa-discord"></i> Discord
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}
