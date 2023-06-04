import type { NextApiRequest, NextApiResponse } from 'next';

interface LLM {
  name: string;
  description: string;
  minVRAM: number;
}

const llms: LLM[] = [
  // Add LLMs data here
    {name: "LLaMA-7B", description: "General purpose LLM", minVRAM: 10},
    {name: "LLaMA-13B", description: "General purpose LLM, a bit more reliable than 7B version", minVRAM: 20},
    // {name: "LLaMA-30B", minVRAM: 40},

];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { graphicsCard, processor, totalRam } = req.body;
  console.log(req.body);
  console.log(graphicsCard)
  // Compare system requirements and filter LLMs
  const filteredLLMs = llms.filter((llm) => {
    return graphicsCard.vram >= llm.minVRAM
  });

  res.status(200).json(filteredLLMs);
}