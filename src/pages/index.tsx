import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";
import Feature, { FeatureProps } from "@/components/molecules/feature";

import styles from "./index.module.css";
import React from "react";
import Setup from "../components/setup/setup";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>LLMBenchMark - SystemRequirementsLab, but for LLMs</title>
        <meta
          name="description"
          content="NextJs starter template using TypeScript and Tailwind"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-serif my-8 px-2 py-2 pt-8 ">Your System</h1>
        <Setup />
      </div>

      <section className={styles.copy}>
        <div className={styles.copyInner}>
          <a href="https://github.com/jryebread/LLMBenchMark">
            <Button>Visit on Github</Button>
          </a>
        </div>
      </section>
      {/* <section className={styles.features}>
        {features.map((f) => (
          <div key={f.title} className={styles.feature}>
            <Feature {...f} />
          </div>
        ))}
      </section> */}
    </>
  );
};

export default Home;
