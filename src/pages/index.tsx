import type { NextPage } from "next";
import Head from "next/head";
import Button from "@/components/atoms/button";
import CopyButton from "@/components/molecules/copy-button";
import Feature, { FeatureProps } from "@/components/molecules/feature";

import styles from "./index.module.css";
import React, { useState } from "react";
import Setup from "../components/setup/setup";

const Home: NextPage = () => {

  const [graphicsCard, setGraphicsCard] = useState(null);
  const [processor, setProcessor] = useState(null);
  const [totalRam, setTotalRam] = useState(null);
  const [filteredLLMs, setFilteredLLMs] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleGet = async () => {
    setLoading(true);
  
    try {
  
      const response = await fetch('/api/llms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          graphicsCard,
          processor,
          totalRam,
        }),
      });
  
      const llms = await response.json();
      setFilteredLLMs(llms);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Head>
        <title>LLMBenchMark - SystemRequirementsLab, but for LLMs</title>
        <meta
          name="description"
          content="LLMBenchMark - SystemRequirementsLab, but for LLMs"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-serif my-8 px-4 py-2 pt-8 ">Your System</h1>
        <Setup
          graphicsCard={graphicsCard}
          setGraphicsCard={setGraphicsCard}
          processor={processor}
          setProcessor={setProcessor}
          totalRam={totalRam}
          setTotalRam={setTotalRam}
        />
      </div>

      <section className={styles.copy}>
      <div className={styles.copyInner}>
        <Button onClick={handleGet}>Get Recommendations</Button>
      </div>
      {loading && (
  <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-purple-500">
    <div className={styles.loader}></div>
  </div>
)}
    </section>

      {filteredLLMs.length !== 0 && <div>
      <div className="relative max-w-screen-lg xl:max-w-screen-xl mx-auto">
        <h1 className="text-6xl font-serif my-8 px-2 py-2 pt-8 ">Recommendations</h1>
      </div>
  <section className={styles.copy}>

      </section>
      <section>
  <table className="table-auto w-full">
    <thead>
      <tr>
        <th className="border py-2">Model Name</th>
        <th className="border px-4 py-2">Description</th>
        <th className="border py-2">Min VRAM</th>
      </tr>
    </thead>
    <tbody>
      {filteredLLMs.map((llm, index) => (
        <tr key={index} className={index % 2 === 0 ? 'bg-gray-200' : ''}>
          <td className="border px-4 py-2">{llm.name}</td>
          <td className="border px-4 py-2">{llm.description}</td>

          <td className="border px-4 py-2">{llm.minVRAM}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>
      </div>}
    </>
  );
};

export default Home;
